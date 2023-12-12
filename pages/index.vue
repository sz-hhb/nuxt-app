<template>
  <div class="home">
    <div class="sec0">
      <div class="container">
        <el-row :gutter="40">
          <el-col :span="24">
            <div class="content">
              <div class="embed-responsive">
                <img src="/img/snow.png" alt="" />
              </div>
              <div class="text-container">
                <div class="logo"><img src="/img/logo.png" alt="" /></div>
                <div class="brief">
                  <span>
                    A massive library of creative effects for your video
                  </span>
                </div>
                <div class="btns">
                  <div class="download"><span>Free Download</span></div>
                  <div class="learn-more">
                    <span>Learn More</span>
                    <img src="/img/arrow_right.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="container">
      <div class="sec1">
        <el-row :gutter="40">
          <el-col :span="24">
            <div class="content">
              <div class="text-container">
                <div class="logo"><img src="/img/logo.png" alt="" /></div>
                <div class="brief">
                  <span>
                    A massive library of creative effects for your video
                  </span>
                </div>
                <div class="btns">
                  <div class="download"><span>Free Download</span></div>
                  <div class="learn-more">
                    <span>Learn More</span>
                    <img src="/img/arrow_right.svg" alt="" />
                  </div>
                </div>
              </div>
              <div class="embed-responsive">
                <img src="/img/snow.png" alt="" />
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="sec2">
        <el-row :gutter="40">
          <el-col :md="12">
            <div class="content content-left">
              <div class="text-container">
                <div class="logo"><img src="/img/logo.png" alt="" /></div>
                <div class="brief">
                  <span>
                    A massive library of creative effects for your video
                  </span>
                </div>
                <div class="btns">
                  <div class="download"><span>Free Download</span></div>
                  <div class="learn-more">
                    <span>Learn More</span>
                    <img src="/img/arrow_right.svg" alt="" />
                  </div>
                </div>
              </div>
              <div class="embed-responsive">
                <img src="/img/snow2.png" alt="" />
              </div>
            </div>
          </el-col>
          <el-col :md="12">
            <div class="content content-right">
              <div class="text-container">
                <div class="logo"><img src="/img/logo.png" alt="" /></div>
                <div class="brief">
                  <span>
                    A massive library of creative effects for your video
                  </span>
                </div>
                <div class="btns">
                  <div class="download"><span>Free Download</span></div>
                  <div class="learn-more">
                    <span>Learn More</span>
                    <img src="/img/arrow_right.svg" alt="" />
                  </div>
                </div>
              </div>
              <div class="embed-responsive">
                <img src="/img/snow2.png" alt="" />
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="sec3">
        <el-row :gutter="40">
          <el-col :md="8">
            <div class="new-content">
              <div class="embed-responsive">
                <img src="/img/new.png" alt="" />
              </div>
              <div class="text-container">
                <div class="brief">
                  <span>
                    The newly released PDFelement 10: Smart PDF Solutions,
                    Simplified by AI.
                  </span>
                </div>
                <div class="date">
                  <span>2023-07-20</span>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :md="8">
            <div class="new-content">
              <div class="embed-responsive">
                <img src="/img/new.png" alt="" />
              </div>
              <div class="text-container">
                <div class="brief">
                  <span>
                    The newly released PDFelement 10: Smart PDF Solutions,
                    Simplified by AI.
                  </span>
                </div>
                <div class="date">
                  <span>2023-07-20</span>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :md="8">
            <div class="new-content">
              <div class="embed-responsive">
                <img src="/img/new.png" alt="" />
              </div>
              <div class="text-container">
                <div class="brief">
                  <span>
                    The newly released PDFelement 10: Smart PDF Solutions,
                    Simplified by AI.
                  </span>
                </div>
                <div class="date">
                  <span>2023-07-20</span>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Home"
})
</script>

<style scoped lang="scss">
@import "~/assets/css/index.scss";

.home {
  margin: 40px 0;

  .sec0 {
    padding: 60px 0;
    margin-bottom: 40px;
    background: #ffe8cd;

    .content {
      gap: 5.21%;
      padding: 0;
      background: none;
    }

    .embed-responsive {
      flex: 1;
    }

    .text-container {
      flex: 1;

      .brief {
        max-width: 491px;
      }
    }
  }

  .sec1 {
    margin-bottom: 30px;
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 9.43%;
    padding: 30px 30px 30px 7%;
    border-radius: 24px;
    background: linear-gradient(360deg, #d0e9ff 0%, #d8fff2 100%);

    .text-container {
      .logo {
        height: 54px;
      }

      .brief {
        margin: 20px 0 40px;
        font-size: 32px;
        font-family: "HarmonyOS_Sans_SC_Bold";
        line-height: 46px;
      }

      .btns {
        display: flex;
        align-items: center;
        gap: 40px;

        .download {
          padding: 16px 22px;
          border: 1px solid #000;
          border-radius: 8px;
          background: #000;
          font-size: 16px;
          font-family: "HarmonyOS_Sans_SC_Bold";
          color: #fff;
          line-height: 23px;
          cursor: pointer;

          &:hover {
            color: #000;
            background: #fff;
          }
        }

        .learn-more {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 20px;
          color: #1154d8;
          line-height: 29px;
          cursor: pointer;

          img {
            position: relative;
            top: 2px;
            transition: all 0.3s ease-in-out;
          }

          &:hover img {
            transform: translateX(3px);
          }
        }
      }
    }

    .embed-responsive {
      &::before {
        padding-top: calc(420 / 700 * 100%);
      }
    }
  }

  .sec2 {
    .content {
      flex-direction: column;
      align-items: flex-start;
      gap: 40px;
      padding: 60px 40px 40px;
      border-radius: 16px;

      .brief {
        max-width: 430px;
      }

      .embed-responsive {
        &::before {
          padding-top: calc(360 / 620 * 100%);
        }
      }
    }

    .content-left {
      background: linear-gradient(360deg, #bce8ff 0%, #bcd2ff 100%);
    }

    .content-right {
      background: linear-gradient(360deg, #d0e9ff 0%, #d8fff2 100%);
    }
  }

  .sec3 {
    margin-top: 40px;

    .new-content {
      border-radius: 16px 16px 0 0;
      overflow: hidden;
      cursor: pointer;

      .embed-responsive::before {
        padding-top: calc(300 / 454 * 100%);
      }

      img {
        transition: all 0.3s ease;
      }

      &:hover {
        img {
          transform: scale(1.05);
        }
      }

      .text-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 20px;
        padding: 20px;
        border-radius: 0 0 16px 16px;
        border: 1px solid #e2e2e2;
        border-top: 0;

        .brief {
          font-size: 20px;
          font-family: "HarmonyOS_Sans_SC_Bold";
          line-height: 29px;
        }

        .date {
          font-size: 16px;
          color: #666666;
          line-height: 23px;
        }
      }
    }
  }
}
</style>
