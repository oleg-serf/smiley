<template>
  <div>

    <section class="contact">

      <div class="contacts-subtitle"></div>

      <div class="contacts__form">
        <div class="content-w">
          <h1>
            Have you got a question?
          </h1>

          <h2>
            Fill in the form below and we will get back to you as soon as possible
          </h2>

          <form method="POST" action="https://smileymovement.org/contact">
            <input type="hidden" name="_token" value="QTS5oP37eBqS3MMJIhqAbCmrmvlZXEu46OcUYzsw">
            <div class="form-group">
              <div class="wrap-for-subject-select">
                <select name="subject" class="subject-filter" required="">
                  <option value="" selected="" disabled="">Select a subject</option>
                  <option>My account</option>
                  <option>Events</option>
                  <option>Organisations or Projects</option>
                  <option>Smiley Awards</option>
                  <option>Website</option>
                  <option>Partnerships</option>
                </select>
                <div class="select-arrows">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.0002 8.00025C21.0002 8.25625 20.9023 8.51225 20.7073 8.70725L12.7072 16.7072C12.3162 17.0982 11.6842 17.0982 11.2933 16.7072L3.29325 8.70725C2.90225 8.31625 2.90225 7.68425 3.29325 7.29325C3.68425 6.90225 4.31625 6.90225 4.70725 7.29325L12.0002 14.5862L19.2932 7.29325C19.6842 6.90225 20.3162 6.90225 20.7073 7.29325C20.9023 7.48825 21.0002 7.74425 21.0002 8.00025Z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="form-group">
              <input name="email" type="text" class="form-control form-control--light" placeholder="Your email.." required="">
            </div>

            <div class="form-group">
              <textarea name="message" type="text" class="form-control form-control--light" placeholder="Write us a message.." rows="6" required=""></textarea>
            </div>

            <div class="form-group-button">
              <button type="submit" class="cta cta--solid-yellow">Submit</button>
            </div>

          </form>
        </div>
      </div>

    </section>


    <Footer />
  </div>
</template>

<script>

  import Footer from '@/components/Footer.vue'

  export default {
    name: 'Contact',
    components: {
      Footer
    },
    data (){
      return{

      }
    },
  }

</script>


<style lang="scss" scoped>

  .contact{
    font-family: 'Muli', sans-serif;
    padding-bottom: 80px;
    .contacts-subtitle{
      height: 200px;
      background: url(/img/contacts/subheader_small_bg.jpg);
      background-repeat: no-repeat;
      background-position: 50%;
      background-size: cover;
    }
    .content-w {
      max-width: 500px;
      margin: 0 auto;
      color: #121212;
      text-align: center;
      padding: 0 20px;
      box-sizing: border-box;
      h1 {
        margin: 45px 0 0;
        font-size: 32px;
        font-weight: 600;
      }
      h2 {
        font-size: 20px;
        font-weight: 400;
      }
      .wrap-for-subject-select{
        border-radius: 4px;
        box-sizing: border-box;
        height: 40px;
        position: relative;
        width: 100%;
        select{
          padding: 0 48px 0 10px;
          width: 100%;
          border: 1px solid #e0e6eb;
          background-color: transparent;
          border-radius: 4px;
          height: 100%;
          color: #656565;
          font: 400 16px/24px 'Muli', sans-serif;
          cursor: pointer;
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          z-index: 2;
          &::-ms-expand{
            display: none;             /* remove arrow IE     */
          }
          &:focus{
            outline: none;
          }
          option{
            color: $default-text;
            &[disabled]{
              color: #656565;
            }
          }
          &:hover + .select-arrows svg{
            fill: #1A1A1A;
          }

        }
        .select-arrows{
          display: flex;
          position: absolute;
          right: 12px;
          top: 8px;
          z-index: -1;
          svg{
            fill: #656565;
          }
        }
      }
      .form-control {
        background-color: #fff;
        border: 1px solid #7d8494;
        padding: 0 15px;
        color: #3d465a;
        font-size: 16px;
        letter-spacing: 0;
        width: 100%;
        -webkit-transition: all .2s;
        transition: all .2s;
        -webkit-appearance: value;
        -moz-appearance: value;
        appearance: value;
        outline: none;
        box-sizing: border-box;
        &.form-control--light {
          border-color: #e0e6eb!important;
        }
      }
      .form-group {
        margin-top: 26px;
        input[type=text] {
          min-height: 40px;
          line-height: 38px;
          padding: 0 10px;
          border: 1px solid #e0e6eb;
        }
        textarea {
          padding: 10px;
          line-height: 1.2;
          width: 100%;
        }
      }
      .form-group-button {
        margin-top: 30px;
        text-align: center;

        .cta {
          width: 100%;
          min-width: 100px;
          color: #fff;
          display: block;
          padding: 0 12px;
          text-decoration: none;
          font-size: 14px;
          cursor: pointer;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          border: none;
          outline: none;
          clear: both;
          height: 46px;
          line-height: 46px;
          position: relative;
          overflow: hidden;
          -webkit-transition: all .4s ease;
          transition: all .4s ease;
          letter-spacing: 2px;
          text-align: center;
          text-transform: uppercase;
          font-weight: 800;
          &:hover {
            background-color: #f6f162;
            box-shadow: 0 2px 28px -13px rgba(0, 0, 0, .4);
            color: #000;
            transition: all .2s ease;
          }
          &.cta--solid-yellow {
            border: none;
            background-color: #f4ed3b;
            color: #000;
          }
        }
      }
    }
  }

</style>