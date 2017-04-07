'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

/**
 * 屏幕横竖屏显示 。自执行 ，屏幕resize 执行。
 * @return crossScreen {[func]} [暴露出的方法]
 *
 * param desc
 * @screenStrCss {[string]} [横屏 css 样式]
 * @screenStr {[string]} [横屏 dom 结构]
 * @detectOrient {[func]} [根据 横屏执行条件，来实现横竖屏显示 ]

 */
var crossScreen = function () {
    var screenStrCss = '<style type="text/css">' + '.warn-wp {' + 'position: fixed;' + 'z-index: 9999999;' + 'top: 0;' + 'right: 0;' + 'bottom: 0;' + 'left: 0;' + 'background: #ff9b94;' + '}' + '.warn-con {' + 'position: absolute;' + 'left: 50%;' + 'top: 50%;' + 'width: 250px;' + 'height: 150px;' + 'margin: -75px 0 0 -125px' + '}' + '.warn-icon {' + 'display: block;' + 'width: 74px;' + 'height: 110px;' + 'margin: 0 auto;' + '-webkit-transform: rotate(-90deg);' + '-webkit-animation: touch 2s ease-in infinite;' + '-webkit-animation-play-state: initial;' + 'background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJMAAADbCAYAAABp7qMUAAAQuklEQVR4Xu2dD4gVxx3H3yEEhJQEwZLQYqgkFJQES8WgGBpSBCWSoEQqisViSPCwRFIalEpKSkqEQrFUPCJKpUFJaVAihgaPlgZFUSoRQySlUokQlEolQlEiyPX7vdu9PN+99+Y3u7Nzb3a/A8Op95vZme/v4+z836GWZxgbG3sASZYhLkWchzgLcQ7ibM+sZD44ClxHUa4g3kC8iHgScXRoaOimTxGHrMaAaAFstyGuQrzPmk52ySpwByU/grgTUJ231MIJEyBiq/Mm4gZLhrKppQLvoFY7ABVbr56hL0wAaRNS7lFLVEtAfCvFlmoYQO3vlbArTIBoBhLsQtzi+0TZ116B3ajhVkB1t7OmU2DKQDoGw+W1l0UVLKrAKBKu6ASqG0x8rW0u+hSla4wCI4BpuL2298CEVokQESYFKWBRgH2okdxwEiaA9Cj+8VN1ti0ayiZTgJ3y+QDqEv/eDtNB/H1dojIdQLnZMUwxcKDDCeBUwyHAtH4SJrRKi/CXM6nWBuXmxNr2FMsP7Y+j3FxRSDkshP7nxlsmVOgwfnBmO9WQMkwnEm+ZyMwRwLR6CCBxbe0qYspLJCnD9DG051JVyoF9p4cJE/tJ7C+lHFKG6QKEfzxl8bOyrydM+/AXLpukHFKG6XMIz/XP1MNewnQKtViceE1SholdjIcS15/FP02Y6lCZlGH6Eo7gHrHUwzXCdAu1mJl4TVKG6Ston/LgJ0fnNmEaSxwkFv8a4heJ1uP7iZZ7SrHrAlNd/JF0PQRT0u4brMILpsHyR9KlEUxJu2+wCi+YBssfSZdGMCXtvsEqvGAaLH8kXRrBlLT7BqvwRWHi2amzg1UVlSagAt9CXq/75lcUpvXYDHXI92GyT0MBLIpwSwy3xngFweQlVzOMBVMz/BylloIpiszNeIhgaoafo9RSMEWRuRkPEUzN8HOUWgqmKDI34yGCqRl+jlJLwRRF5mY8RDA1w89RaimYosjcjIcIpmb4OUotBVMUmZvxEMHUDD9HqWVsmFZjCwpvr1eooQKxYVoJmD6ooY6qEhQQTMIgmAKCKZiUykgwiYFgCgimYFIqI8EkBoIpIJiCSamMBJMYCKaAYAompTISTGIgmAKCKZiUykgwiYFgCgimYFIqI8EkBoIpIJiCSamMBJMYCKaAYAompTISTGIgmAKCKZiUykgwiYFgCgimYFIqI8EkBoIpIJiCSamMBJMYCKaAYAompTISTDVjAA7l51Y3IB7AgdfzMasnmEqoDfFmIPlixHmIvJ3/O4j55+H5MebZiPk3gOnYu4j/RDwJRwf/7AfKsw15v5VV6T08Y02J6nknFUyekkEwfv59GeKPsp9FPwd/G+lPI45mrQg/Pl04dIDEfAjsU4UzLJBQMBlEywDiq+PZDCC2SKHDOFSIbFHu+GSO8hHuvyC2l0sw+YhYtS2cNAvPeBVxC2LRFsi3mHwt7kTca4EKZZwD238g8pXaHgSTr/JV2MNB7O8Qol8g3l/FMwx5EqodAIqtVdeQlfMUfslOd2cQTAaRKzWBg36AB+xBZKd6EMJJFOJlQHWxszAo6z7826YehRRM0+W9bGTGD+95f3wvQpnZh9oOoH6bPwvlJUSEqVcQTBEcM+URcAyH839GXDodz/d4Ji9KW4vIaYi/I/J13CucBXxPeuRd2rTxozkI8ChUPI7IOaIUwicoJAcG/IRpv/AJYHoiZoUaDVM2W8whdedIKKYPqnqWYKpK2c58s/9Ffw0EEme1P0LkT04+8mceZuIPeWeerQlbQs6aV90SCqYYMAEkOvWM4VXRrzgf4pfvIR7F6+S6b7mz+aEXkG4VYhV9NcHk6xRfeziRLQVBYie2SCBAv+w2VC+SGdNkr1uOIp8rmkeXdIIpoJhds4Lj/oBfbCzwHC53cHh+rkBaUxKUjet9byOGmG0XTCbVCxrBWYSIMPkEzvFsBUQjPomK2mav4HeRvuyrTzAVdYIrXbbO9i/YcVhtDexMrwFInIWOFlDW7+JhFxD7zSO5yiOYXAoV/T0cdBBp13mk5/6j5wHSFY80pU1RzkXI5H3EfF9U0Twvo+xziyYukq4R80yZg9jptgYusj4JZ+Qb26zpStmhnBzd/RGRg4Sy4QrK/0jZTHzSNwWmYxCFe5EsgZvWnq5iJ2S/h8MR7bskLeV02dQephVwEudnooVs2M39PtawFmX8k9W4rF22jYQjuI1l8+pIX3uYnpqGzixHRhxyWwI34f/EYhjCJhsUHEZe3PYSOgimkIrCWZyvuYpo6YPcgN1jgIk/Kw9Z/4KvX+6UrCIIppCqwmEvIT++QiyBs9q/shiWtUG5FiCPE4hV7uIUTGUd1Z4eTuNC7jOGPP8Hm28DppsG21ImKBN3KHyM6NpCUuo5SCyYyiqYp8/W4P6Lv1tecfsB0ouhnt0vH5TrDfw+xm7Om6jTgzHq1KY51zs52eoVhiDKmFeKCeNoHXAUjy0SWyZL4FQAt5BUHlAuLpNwUtJnJr5IuaIOJljA2PNMMWGytgDscH8TMPG0bfIhm2qYHXvCte4wWacEPoDwK5OnaAAqUOeWiZ1cjppcgWfTfu0yGtTfZ3NV47s2q9weY6l/nWH6CgJYVt2jznhbnGKxyfY+sSPffr6PS0FHEV+LvUBd29dcNpK7ZXEKbBZO9/9oYzknzVA/Lgbz7oNegQvUT8SagM0LUcuWKZvL+Y/RSY9Mx/9iY9mmmKFuPIzAI+GuwF2hvLMgWqgrTDwBwo1wlvBgjMlKS0EsNnDYRthZdotGmzure8vENTlOWLquvuHMN2FKZloAMPFGlt8bwNuNev3UYBfMpJYtE9VBxSw7K3ltzcvB1IyQkce+p52o2/YIRZp8RJ1h4iIq55q6bYpjS8RLILi4yxFQMgEO24XCvmIosPpMBpG8TCA+7y7izWr5CVru7f4QEF32ymhAjFEfHmdfbihO9CmP2rZMBrGTNIHDuD/Lctjge/gPU+vbdqOtzSVJiqPQAImt67+NdfsGYOIAI1qoZcuESnEUtzl7HVR5wuQcHLY3lrc8RnIXUa75scqVP6euMPHsmc/RpjK6c6aZdyZVHuAsTlZy0tIVRlCmYZdR6N/XFSbuGeK22KoDD2jOj/E6gaN4yvczY4VWo0xHjLbBzARTcSl5BwH7gMG/NNCtSHBUv8tQ25NwqoNbkKMcjGh/cF1h4nSAz1k5X6S4V5xD7yhnAOEknmDh8pBlF0T0z1zk4tUVpkJ7kY1EXYIdD5PyZ5QAJ/mcSF6JsvEi1ehBMPlJzn3i7I9Ee4XAQbx/gDcBWwL7cHOna61RMFlcNGFzAJGXu3t918Se/VRLOIc7RTmCs5ywYQbDKF+Ue6S61Usw2bw9HetcnOVmv896vo7zaWyVosHeKZ1g6g8TR0Y/hoN4j2W0AKdwkZrHtDhfZg1sNaNNoKplsrplwo63xvGyryhD/7xoAIkb+3iuzufbLdE/bSGY/GBiZ5Yjoyiz2ywaQOJuAO7D8jmgydcaLyaLuqgrmPxgojVfczwKNfkBHP8s3CkAEXeG8rKvnyO6dod2Zjjtr7e2VrXQlMxAHw/PJvk+d7vRbMHJSd642/7lAXPiXoYoJ0dp3IZLkHxaozzL6Ftz+1W6rh1wzhiHhCnXkB3x/YijZeZyIDpHaLyslR9ItOxN6uZD3kvOydOB2b8umIq1L1xOYWvFK5350eZLcGrP63iyTjU71lyA5i1xZe/4ZgvJflLlVwD5yCOYfNSy2eafnKc1+0KEKGTgd1qWxFzOsRa+6TBxJGRZPLXqWbUdR5g/HESQWPEmw0SQliBy7Ysd4EEPbPHYR+L810CGJsP0IhzDzjT/RxEo7hcK8QGcKhzNmW2OJgf6WFZTYZqyrTWbTiBQPBY1KIEdbM4jRbuXvEzF6woTLyHtdXEFR1+8drDrgigE4Z3hPOhYdMhexh/taQ/gL7wax/vDiKEK4JtPXWHi6+rLLmLQMTxP1vfESrbQyslEzkgXmUz09UO7/d/wF866E/qkQpNg4uQeR0Lmi1AzqHiXOMGq8pu67AtxdyTvB6js44hVk9kkmH5WZo0NQnGykbPWfA2G6KizlSRAPEXCGfWB7lxbQKwrTFzzar85LuhtJxCNBxY4i80zbIyWT1bw1cp943x98a4DcwtpceQg2NQSJgqLinFzGc+a8aaT8SmAKgOex9X+Xhey8oRt8i2PS7/YMEW/TMElgH4fToHYMEU7Sh1OIuVkVUAwWZWSnVMBweSUSAZWBQSTVSnZORUQTE6JZGBVQDBZlZKdUwHB5JRIBlYFBJNVKdk5FRBMTolkYFVAMFmVkp1TAcHklEgGVgUEk1Up2TkVEExOiWRgVUAwWZWSnVMBweSUSAZWBQSTVSnZORUQTE6JZGBVQDBZlZKdUwHB5JRIBlYFBJNVKdk5FRBMTolkYFVAMFmVkp1TAcHklEgGVgUEk1Up2TkVEExOiWRgVUAwWZWSnVMBweSUSAZWBQSTVSnZORUQTE6JZGBVQDBZlZKdUwHB5JRIBlYFBJNVKdk5FRBMTolkYFVAMFmVkp1TAcHklEgGVgUEk1Up2TkVEExOiWRgVUAwWZWSnVMBweSUSAZWBWLDtBYF4y39CvVUgJ+Qfde3akU/Re/7HNk3QAHB1AAnx6qiYIqldAOeI5ga4ORYVRRMsZRuwHMEUwOcHKuKgimW0g14jmBqgJNjVVEwxVK6Ac8RTA1wcqwqCqbuSl/DPx9AHEW8iXgZkZ+w57eCX0B8FvG+WE5K5TmC6V5P8WPOOxB348POd3o5EQuhXLvalUGViq8rL6dg+lri6/jjSkB01qo6oHoDtq9b7etuJ5gmPMwW6WkfkHIwABRbqFfqDoqlfoJpQqXtAGmnRbBOG8A0A/92AXFekfR1SiOYWi12tucCJrZOhQKAeg4J3y+UuEaJBFOr9RuA9FoZn2at01XkMbtMPqmnFUyt1vOA6WhZRwKow8hjVdl8Uk4vmFqthYDpXFknqiPeagmmVusxwFR6PztgegtAbisLZcrpBVOrtQQwnS7rRMD0NvJ4qWw+KacXTCWmBdodD5g4PfB4yjCULbtgarVOo2VaUkZIgMQ1u8/K5FGHtIJpwouc/f6oqEMB00GkXVc0fV3SEaZbqMzMulSoYD0uIh1Hdd4Tl9DvGaQ9jsiZ8CaH24SJk20PNVmFrO6ca1rTb7dAp0bQjksoJxBnSb/WNcJ0CkIslhjjCpxEXAugvnDpkS2h8PV2v8u2Ib8/TZj2obKbGlJhSzX5qtuN+LtOqKAVN8QtQ3wVka83ha8V2EuY2HHk/zCFqQpwh+WNLPJVxlGbWqLupKwnTBSJ/SZtQ9V/p6IKcFfqw0NMrUXKohoqXabAEXQJVucwLcI/npE0UqCgAuOL5eMwZa2TJt4KKtnwZIcA0npq0A4TT1x8qr5Tw9Hwqz77SvPzXReTMGWt02b83OOXn6wbrMAwQBrJ638PTBlQhIlQKUiBfgqMAKThdoNuMHGN6RjicmkpBXoowJPOKwDT3b4wZa0TgeJ5sC2SUwp0KMDVga2dINFmSsvUnhDzT1xm4WtPE5piip1t9pH295KiL0xZKzUHP99E3CA9G6vAO6j5DoB0pZ8CTpjyxGilFuDP3DDP4zxqqerPFVuiI4g7AdF5S3XNMLVB9QD+zJXzpYjcz8O1PV43oz09FsUH04aL2fmiNjcKcivOKCDidULm8H8L1NuzPBucLAAAAABJRU5ErkJggg==);' + 'background-size: 100%;' + 'background-repeat: no-repeat' + '}' + '.warn-con p {' + 'font-size: 14px;' + 'margin-top: 30px;' + 'color:#000' + '}' + '@-webkit-keyframes touch {' + '40%,60% {' + '-webkit-transform: rotate(0)' + '}' + '100% {' + '-webkit-transform: rotate(-90deg)' + '}' + '}' + '</style>';
    var screenStr = '<div><div class="warn-con">' + '<i class="warn-icon"></i>' + '<p>为了更好的体验，请使用竖屏浏览</p>' + '</div></div>';

    var screenDom = screenStr + screenStrCss;
    var tempNode = document.createElement("div");
    document.body.appendChild(tempNode);
    tempNode.innerHTML = screenDom;
    tempNode.className = "warn-wp";

    var detectOrient = function detectOrient() {
        // alert("J-recordOrientX = "+localStorage.getItem('J-recordOrientX'));
        // let screenWidth = document.body.offsetWidth || screen.width,
        //     screenHeight =document.body.offsetHeight ||  screen.height;
        // let documentWidth = document.documentElement.clientWidth;
        // let bodyWidth= document.body.offsetWidth;

        var data = localStorage.getItem('J-recordOrientX');
        var w = document.documentElement.clientWidth;
        var _Width = 0,
            _Height = 0;

        if (!data) {
            _Width = window.screen.width;
            _Height = window.screen.height;
            localStorage.setItem('J-recordOrientX', _Width + ',' + _Height);
        } else {
            var str = data.split(',');
            _Width = str[0];
            _Height = str[1];
        }
        // alert("w = "+w+"_width = "+_Width+"_height = "+_Height);
        var el = document.getElementsByClassName('warn-wp');
        if (w == _Width) {
            // 竖屏
            console.log("竖屏");
            el[0].style.display = 'none';
            return;
        } else if (w == _Height) {
            // 横屏
            el[0].style.display = 'block';
            document.getElementsByTagName('input') ? document.activeElement.blur() : null;
            return;
        }
    };
    detectOrient();
    window.addEventListener('resize', function () {
        detectOrient();
    });
}();

exports.default = crossScreen;