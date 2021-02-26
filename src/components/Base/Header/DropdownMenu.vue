<template>
  <div class="dropdown__list--menu">
    <v-menu
      max-height="900"
      min-width="300"
      left
      allow-overflow
      v-model="dropdown"
    >
      <template v-slot:activator="{ on, attrs }" class="mr-2">
        <v-btn
          v-bind="attrs"
          v-on="on"
          icon
          style="border: none; outline: none;"
          class="ml-3"
        >
          <v-icon color="black" medium>fa fa-bars</v-icon>
        </v-btn>
      </template>
      <v-list style="opacity: 0.97;" class="pl-4 pr-2">
        <div class="d-flex justify-end mr-2">
          <span @click="menu = false" style="cursor: pointer">
            <v-icon large color="#ffe61f">close</v-icon>
          </span>
        </div>
        <!-- SECTION 1 -->
        <div style="border-bottom: 2px solid #ffe61f;" class="mr-10 ">
          <div
            class="pr-0 pb-1 custom-list-item custom__outer pb-0"
            v-for="(item, index) in dropdownMenuItems.firstSection"
            :key="index"
          >
            <router-link :to="item.path"
              ><div class="custom-list-item" style="cursor: pointer;">
                {{ item.name }}
              </div></router-link
            >
          </div>
        </div>
        <!-- SECTION 2 -->
        <div style="border-bottom: 2px solid #ffe61f;" class="mr-10">
          <div
            class="pr-0 custom__outer pb-1 custom-list-item"
            v-for="(item, index) in dropdownMenuItems.secondSection"
            :key="index"
          >
            <router-link :to="item.path"
              ><div class="custom-list-item" style="cursor: pointer;">
                {{ item.name }}
              </div></router-link
            >
          </div>
        </div>
        <!-- SECTION 3 -->
        <div style="border-bottom: 2px solid #ffe61f;" class="mr-10">
          <div
            class="pr-0 custom__outer pb-1 custom-list-item"
            v-for="(item, index) in dropdownMenuItems.thirdSection"
            :key="index"
          >
            <router-link :to="item.path"
              ><div class="custom-list-item" style="cursor: pointer;">
                {{ item.name }}
              </div></router-link
            >
          </div>
        </div>
        <!-- SECTION 4 -->
        <div class="mr-10 hello">
          <div
            class="pr-0 custom__outer pb-1 custom-list-item dropdown__menu--custom"
            v-for="(item, index) in dropdownMenuItems.lastSection"
            :key="index"
          >
            <v-menu
              open-on-hover
              style="margin-left: -253px !important;"
              left
              offset-x
              class="add__class"
            >
              <template v-slot:activator="{ on, attrs }">
                <router-link :to="item.path"
                  ><div
                    class="custom-list-item inner_item"
                    v-bind="attrs"
                    v-on="on"
                    style="cursor: pointer;"
                  >
                    {{ item.name }}
                  </div></router-link
                >
              </template>
              <div class="parent">
                <v-list class="new__class">
                  <div class="new__class--header">
                    <img src="@/assets/loader.png" class="mr-2" alt="" />
                    UN Goals
                  </div>
                  <v-list-item
                    v-for="(subItem, index) in item.children"
                    :key="index"
                    class="new__class--item"
                    @click="dropdown = !dropdown"
                  >
                    <v-list-item-title>
                      <router-link :to="subItem.path">{{
                        subItem.name
                      }}</router-link>
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </div>
            </v-menu>
          </div>
        </div>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  data: () => ({
    dropdown: false,
    dropdownMenuItems: {
      firstSection: [
        { name: "News", path: { name: "news" } },
        { name: "Events", path: { name: "talks" } },
        // { name: 'Videos', path: { name: 'interviews' } },
        { name: "Interviews", path: { name: "interviews" } },
        { name: "Discussions", path: { name: "contact" } },
      ],
      secondSection: [
        { name: "Network", path: { name: "network" } },
        { name: "Organisations", path: { name: "organisations" } },
        { name: "Members", path: { name: "members" } },
      ],
      thirdSection: [
        { name: "UN Goals", path: { name: "goals" } },
        { name: "Awards", path: { name: "" } },
        { name: "About us", path: { name: "story" } },
      ],
      lastSection: [
        {
          name: "Sustainability",
          path: {
            name: "news-category-item",
            params: { slug: "sustainable-cities-and-communities" },
          },
          children: [
            {
              name: "Clean Water & Sanitation",
              path: "/goals/clean-water-and-sanitation",
            },
            {
              name: "Clean Energy",
              path: "/goals/affordable-and-clean-energy",
            },
            {
              name: "Sustainable Cities & Communities",
              path: "/goals/sustainable-cities-and-communities",
            },
            {
              name: "Responsible Consumption",
              path: "/goals/responsible-consumption-and-production",
            },
            {
              name: "Partnership for the Goals",
              path: "/goals/partnerships-for-the-goals",
            },
          ],
        },
        {
          name: "Social Justice",
          path: {
            name: "news-category-item",
            params: { slug: "peace-justice-and-strong-institutions" },
          },
          children: [
            { name: "No Poverty", path: "/goals/no-poverty" },
            { name: "Zero Hunger", path: "/goals/zero-hunger" },
            { name: "Gender Equality", path: "/goals/gender-equality" },
            {
              name: "Reduced Inequalitie",
              path: "/goals/reduced-inequalities",
            },
            { name: "Justice and Peace", path: "/goals" },
          ],
        },
        {
          name: "Health",
          path: {
            name: "news-category-item",
            params: { slug: "good-health-and-well-being" },
          },
          children: [
            { name: "Good Health", path: "/goals/good-health-and-well-being" },
          ],
        },
        {
          name: "Education",
          path: {
            name: "news-category-item",
            params: { slug: "quality-education" },
          },
          children: [
            { name: "Quality Education", path: "/goals/quality-education" },
          ],
        },
        {
          name: "Climate",
          path: {
            name: "news-category-item",
            params: { slug: "climate-action" },
          },
          children: [
            { name: "Climate Action", path: "/goals/climate-action" },
            { name: "Life Below Water", path: "/goals/life-below-water" },
            { name: "Life on Land", path: "/goals/life-on-land" },
          ],
        },
        {
          name: "Economic Growth",
          path: {
            name: "news-category-item",
            params: { slug: "decent-work-and-economic-growth" },
          },
          children: [
            {
              name: "Good Jobs & Economic Growth",
              path: "/goals/decent-work-and-economic-growth",
            },
            {
              name: "Innovation & Infrastructure",
              path: "/goals/industry-innovation-and-infrastructure",
            },
          ],
        },
      ],
    },
  }),
};
</script>

<style lang="scss" scoped>
.custom-list-item {
  text-align: right;
  font-weight: bold;
  font-size: 18px;
  :hover {
    color: #ffe61f;
  }

  a {
    text-decoration: none;
    color: black;
  }
}
.dropdown__list--menu {
  display: inline;
}
.dropdown__menu--custom {
}
.custom__outer {
  margin-left: -16px;
  position: relative;
  &:hover {
    box-shadow: 0px 3px 19px 2px #cacaca;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
  .custom-list-item {
    padding-right: 10px;
  }
}
.new__class {
  text-align: end;
  a {
    text-decoration: none;
    font-weight: 400;
    font-size: 18px;
    display: block;
    color: #000;
  }
  &--header {
    text-align: left !important;
    padding: 0 15px 10px 10px;
    font-weight: 400;
    font-size: 18px;

    display: flex;
    align-items: center;
  }
  &--item {
    margin-bottom: -7px;
    margin-top: -14px;
  }
}
.new__class--item {
  &:hover {
    a {
      color: #ffe61f;
    }
  }
}
</style>
