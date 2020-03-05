<template>
    <div class="Loader" id="loader" @click="playSound">
        <div class="shoes">
            <div class="tips">请戴上耳机</div>
        </div>
        <div class="play" id="play"></div>
    </div>
</template>

<script>
    import { startSound } from "./Sounds";

    export default {
        name: "Loading",
        methods: {
            playSound: function () {
                console.log('click event');
                startSound.play();
            }
        }
    }
</script>

<style scoped>
    .Loader {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 999;
    }

    .Loader.hide {
        animation: loaderHide 1s;
        opacity: 0;
        visibility: hidden;
    }

    @keyframes loaderHide {
        0% {
            opacity: 1;
            visibility: visible;
        }
    }

    .Loader .shoes {
        width: 204px;
        height: 117px;
        background: url(../assets/img/shoes.gif) no-repeat;
        transform: scale(0.5);
        transition: all .35s;
    }

    .Loader .shoes .tips {
        width: 180px;
        height: 50px;
        background: #504279;
        border-radius: 20px;
        color: #f6c755;
        line-height: 50px;
        font-size: 22px;
        text-align: center;
        position: absolute;
        left: 50%;
        margin-left: -90px;
        bottom: -65px;
    }

    .Loader .shoes .tips:before {
        content: '';
        background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAb1BMVEUAAAD0x1T3x1T2xlX3yFX3x1X3x1T2x1X2yFX3yFX2x1X1yFT2x1X1xlP5ylb2yFX2yFX3x1X2x1X2x1T3yFX2x1T2x1T3x1X1x1X1yFT2yFTvw1X3x1X1xlX2yFX2x1X2yFT0xVb2x1PzxVH2x1Wsrd7UAAAAJHRSTlMAP39TmfNvv7GoSR/ZMinv5tzVxbeWiHhpY1cP08+ijYtcNxYKUdmAAAAAoElEQVQoz62R2RLCIAxFA21pWeyu3dy9//+NjhVhoA/OOJ6XZHJICAP9jhqkyfLLtIvqAo0Uihd1JYJ6USc2O+BMnmrvc31M/fk2aEfi5rNAzLAbnDiF9O/JC1Qkrt0a7nhEYs7WMBpaJt8kBGmUr4zn1APMvQMDgVnRwK2YAp0TPAsE2DchN6K1N25ESRYTiIIcEvh80AjcyOObSWv6M0/4gQunOyD52AAAAABJRU5ErkJggg==');
        background-size: cover;
        width: 25px;
        height: 25px;
        display: inline-block;
        vertical-align: top;
        margin: 13px 6px 0 0;
        animation: tips 1s infinite;
    }

    @keyframes tips {
        30% {
            opacity: 0;
        }
    }

    .Loader.loaded .shoes {
        transform: scale(0);
        opacity: 0;
    }

    .Loader .play {
        width: 100px;
        height: 100px;
        background: url(../assets/img/play.png) no-repeat;
        background-size: 100% auto;
        position: absolute;
        opacity: 0;
        transition: all .5s;
        left: 50%;
        top: 50%;
        margin: -50px 0 0 -50px;
        transform: scale(0);
    }

    .Loader.loaded .play {
        opacity: 1;
        transform: scale(1);
    }
</style>