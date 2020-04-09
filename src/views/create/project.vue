<template>
  <div>
    <form class="grid container">
      <div class="grid-column">
        <div class="form-group">
          <label for="projectName">Name your Project *</label>
          <input
            type="text"
            class="form-control"
            id="projectName"
            placeholder="What's the problem you're trying to solve?"
            v-model="project.title"
            required
          />
        </div>
        <div class="form-group">
          <label for="projectDescription">Tell us about your project in a few words *</label>
          <textarea
            class="form-control"
            id="projectDescription"
            placeholder="What is your end goal? (e.g improved wheelchair access in local community)"
            v-model="project.description"
            required
          ></textarea>
        </div>
        <div class="form-group">
          <label for="projectLocation">Project Location *</label>
          <input
            type="text"
            class="form-control"
            id="projectLocation"
            placeholder="Search for a city"
            v-model="project.location"
            required
          />
        </div>
        <div class="form-group">
          <label>
            What support / resources do you need ? *
            <small>Select from the list belowe (minimum of 3)</small>
          </label>
          <div
            class="select-support"
            v-for="(item, index) in project.support"
            :key="'support-skill-' + item.skill + '-' + index"
          >
            <select class="form-control" v-model="project.support[index].skill">
              <option
                v-for="parentCategory in supportItems"
                :key="parentCategory.id"
                :value="parentCategory.id"
              >{{parentCategory.title}}</option>
            </select>
            <select class="form-control" v-model="project.support[index].value">
              <option
                v-for="childCategory in categoryItems(project.support[index].skill)"
                :key="childCategory.id"
                :value="childCategory.id"
              >{{childCategory.title}}</option>
            </select>
            <div class="select-support__controls">
              <button @click.prevent="removeSupportItem(index)" v-if="index >= 3">
                <i class="fa fa-remove"></i>
              </button>
              <button v-if="index + 1 == project.support.length" @click.prevent="addSupportItem">
                <i class="fa fa-plus-circle"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label class="form-control--inline" for="projectDonation">
            <input
              type="checkbox"
              name="projectDonation"
              id="projectDonation"
              v-model="project.donation.active"
            />
            <div class="checkbox"></div>
            <span>Add a Donation area to your project</span>
          </label>
        </div>
        <div class="form-group" v-if="project.donation.active">
          <label for="donationLink">Add a donation link *</label>
          <input
            type="url"
            class="form-control"
            id="donationLink"
            placeholder="Paste your link here (start with https://)"
            pattern="https://.*"
            required
            v-model="project.donation.link"
          />
        </div>
        <div class="form-group" v-if="project.donation.active">
          <label for="donationDescription">
            Explain why do you need financial support?*
            <small>Max. 400 characters</small>
          </label>
          <textarea
            class="form-control"
            id="donationDescription"
            placeholder="Why do you need funding?"
            v-model="project.donation.description"
            required
          ></textarea>
        </div>
      </div>
      <div class="grid-column">
        <div class="form-group">
          <label for="projectAffected">Who is most affected? *</label>
          <input
            type="text"
            class="form-control"
            id="projectAffected"
            placeholder="Who is most affected? (Separate with comma)?"
            v-model="project.affected"
            required
          />
        </div>
        <div class="form-group">
          <label>Project Stage *</label>
          <div class="form-group--grid">
            <label class="form-control--inline">
              <input
                type="radio"
                name="projectStage"
                value="Proof of concept/Idea"
                v-model="project.stage"
                required
              />
              <div class="radio"></div>
              <span>Proof of concept / Idea</span>
            </label>
            <label class="form-control--inline">
              <input
                type="radio"
                name="projectStage"
                value="Start Up / Business planning"
                v-model="project.stage"
              />
              <div class="radio"></div>
              <span>Start Up / Business planning</span>
            </label>
            <label class="form-control--inline">
              <input
                type="radio"
                name="projectStage"
                value="Scaling up operations"
                v-model="project.stage"
              />
              <div class="radio"></div>
              <span>Scaling up operations</span>
            </label>
            <label class="form-control--inline">
              <input
                type="radio"
                name="projectStage"
                value="Scaling out inter/nationally"
                v-model="project.stage"
              />
              <div class="radio"></div>
              <span>Scaling out inter / nationally</span>
            </label>
          </div>
        </div>
        <div class="form-group">
          <label for="projectStepsCount">Steps needed for change? *</label>
          <select class="form-control" id="projectStepsCount" v-model="project.steps.count">
            <option v-for="index in 9" :key="'step-count-'+index" :value="index">{{index}}</option>
          </select>
        </div>
        <div class="form-group">
          <label>Define these steps</label>
          <div class="steps" v-for="index in project.steps.count" :key="'step-'+index">
            <div class="steps__step">{{index}}</div>
            <input
              type="text"
              class="form-control steps__input"
              v-model="project.steps.items[index]"
              required
              :placeholder="helpers[0]"
            />
          </div>
        </div>
        <div class="form-group">
          <label>
            Upload a Project photo
            <small>(File size max 2mb, JPEG or PNG only)</small>
          </label>
          <input
            type="file"
            ref="fileInput"
            class="form-control"
            @input="onSelectFile"
            id="projectPhoto"
            accept=".jpg, .jpeg, .png"
            required
          />
        </div>
      </div>
      <div class="grid-column grid-column--full-width">
        <hr />
        <button type="submit">Create project</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "@/axios-auth";

export default {
  name: "CreateProject",
  data() {
    return {
      project: {
        title: null,
        description: null,
        location: null,
        goals: [],
        support: [
          {
            skill: 1,
            value: 12
          },
          {
            skill: 1,
            value: 12
          },
          {
            skill: 1,
            value: 12
          }
        ],
        donation: {
          active: false,
          link: null,
          description: null
        },
        affected: null,
        stage: null,
        steps: {
          count: 1,
          items: []
        },
        photo: null
      },
      helpers: [
        "i.e. Market the problem on the Network",
        "i.e. Start fundraising, petition etc",
        "i.e. Reach fundraising target"
      ],
      supportItems: []
    };
  },
  methods: {
    onSelectFile() {
      // TODO: Refactor;
      let photo = null;
      const input = this.$refs.fileInput;
      const files = input.files;
      const fileSize = files[0].size;
      if (files && files[0] && fileSize < 2000000) {
        const reader = new FileReader();
        reader.onload = e => {
          photo = e.target.result;
          this.project.photo = e.target.result;
        };
        reader.readAsDataURL(files[0]);
        this.$emit("input", files[0]);
      } else {
        this.$swal({ text: "File is too big to upload", icon: "error" });
        input.value = "";
      }
    },
    addSupportItem() {
      this.project.support.push({
        skill: 1,
        value: 9
      });
    },
    removeSupportItem(index) {
      this.project.support.splice(index, 1);
    },
    categoryItems(id) {
      const element = this.supportItems.find(cat => cat.id == id);

      return element?.supports ? element.supports : null;
    }
  },
  watch: {
    "project.donation.active": function() {
      this.project.donation.link = null;
      this.project.donation.description = null;
    }
  },
  mounted() {
    axios
      .get("/users/settings")
      .then(res => {
        console.log("Loaded support", res);
        this.supportItems = res.data.all_supports;
      })
      .catch(err => console.error("Loading support fail"));
  }
};
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;

  .grid-column {
    &--full-width {
      grid-column: 1 / span 2;
    }
  }
}

.select-support {
  display: grid;
  grid-template-columns: 2fr 3fr 1fr;
  grid-gap: 17px;
  margin-bottom: 16px;

  .select-support__controls {
    display: flex;
    line-height: 1;
    align-items: center;
    @include font-size(1.5rem);

    button {
      background: none;
      border: none;
      margin: 0px 5px;
    }
  }
}

.steps {
  display: flex;
  align-items: center;
  @include margin-bottom(1rem);

  .steps__step {
    margin-right: 24px;
    @include font-size(1.2rem);
    font-family: "Montserrat SemiBold", sans-serif;
    min-width: 24px;
    text-align: center;
  }
  .steps__input {
  }
}

.form-group {
  @include margin-top(0.5rem);
  @include margin-bottom(2rem);

  &--grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 12px;
  }

  label {
    @include font-size(1rem);
    @include margin-bottom(1.2rem);
    color: #121212;
    line-height: 1.5;
    font-family: "Montserrat SemiBold", sans-serif;
    display: flex;
    align-items: center;

    small {
      margin-left: 12px;
      opacity: 0.5;
    }
  }

  select.form-control {
    @include rfs(2.625rem, height);
  }

  .form-control {
    box-sizing: border-box;
    display: block;
    width: 100%;
    @include padding(0.5rem 1rem);
    @include font-size(1rem);
    line-height: 1.5;
    color: #121212;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;

    &--inline {
      display: flex;
      align-items: center;
      line-height: 1;
      position: relative;

      input {
        position: absolute;
        left: 0px;
        top: 0px;
        opacity: 0;
        width: 24px;
        height: 24px;

        &:checked + .radio {
          &::before {
            width: 65%;
            height: 65%;
          }
        }
        &:checked + .checkbox {
          &::before {
            @include font-size(1rem);
          }
        }
      }

      .radio {
        width: 24px;
        height: 24px;
        background-color: #fff;
        border-radius: 50%;
        border: 1px solid #393939;
        cursor: pointer;
        position: relative;

        &::before {
          content: "";
          display: block;
          width: 0%;
          height: 0%;
          position: absolute;
          background-color: #383838;
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transition: width 0.4s, height 0.4s;
          transform: translate(-50%, -50%);
        }

        &:hover {
          &::before {
            width: 50%;
            height: 50%;
          }
        }
      }
      .checkbox {
        width: 24px;
        height: 24px;
        background-color: #fff;
        border: 1px solid #393939;
        cursor: pointer;
        position: relative;

        &::before {
          content: "\f00c";
          display: inline-block;
          font-family: FontAwesome;
          font-size: inherit;
          text-rendering: auto;
          -webkit-font-smoothing: antialiased;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          font-size: 0px;
          transition: font-size 0.4s, background-color 0.4s;
        }
      }

      span {
        font-family: "Monsterrat Regular", sans-serif;
        margin-left: 24px;
        cursor: pointer;
      }
    }
  }

  textarea.form-control {
    min-height: 150px;
  }
}

button {
  &[type="submit"] {
    // TODO - refactor button
    background-color: #f9f69c;
    width: 100%;
    min-width: 100px;
    color: #393939;
    display: block;
    padding: 0 12px;
    text-decoration: none;
    font-size: 14px;
    cursor: pointer;
    border: none;
    outline: none;
    height: 46px;
    line-height: 46px;
    position: relative;
    overflow: hidden;
    transition: all 0.4s ease;
    letter-spacing: 2px;
    text-align: center;
    text-transform: uppercase;
    max-width: 220px;
    display: block;
    margin: auto;
  }
}
</style>