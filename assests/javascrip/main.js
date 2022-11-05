const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const musicControlLeftImg = $('.music__control-left-img');
const musicControlLeftContentSong = $('.music__control-left-content-song');
const musicControlLeftContentSinger = $('.music__control-left-content-singer');
const audio = $('#audio');
const playBtn = $('.music-control__icon-play');
const randomBtn = $('.music-control__icon1');
const prevBtn = $('.music-control__icon2');
const nextBtn = $('.music-control__icon4');
const replayBtn = $('.music-control__icon5');
const progress = $('#progress');
const remainTime = $('.music-control__progress-time-start');
const durationTime = $('.music-control__progress-time-duration');
const playList = $('.option-all__songs-list');
const sliderItems = $$('.option-all__song-slider-img');
const headerSetting = $('.header__setting');
const headerOverlay = $('.header__right-overlay');
const headerSettingList = $('.header__setting-list');
const volumeIcon = $('.music-control__right-volume-icon');
const volumeProgress = $('#progress1');

const sideBars = $$('.sidebar__item');
const containerPanes = $$('.js__container-panes');




const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isReplay: false,
    isMute: false,
    volume: 100,
    songsData: [
        {
            background: './assests/img/songs/0.webp',
            name: 'Anh Đã Lạc Vào',
            singer: 'Green, Đại Mèo Remix',
            pathSong: './assests/music/list-song/0.mp3',
            duration : '04:37',
        },
        {
            background: './assests/img/songs/1.webp',
            name: 'Chạy Về Khóc Với Anh',
            singer: 'Erik, Duzme Remix',
            pathSong: './assests/music/list-song/1.mp3',
            duration : '03:26',
        },
        {
            background: './assests/img/songs/2.jpeg',
            name: 'Sẵn Sàng Yêu Em Đi Thôi',
            singer: 'Woni, Minh Tú, Đại Mèo Remix',
            pathSong: './assests/music/list-song/2.mp3',
            duration : '04:01',
        },
        {
            background: './assests/img/songs/3.webp',
            name: 'Gieo Quẻ',
            singer: 'Hoàng Thuỳ Linh, ĐEN, Orinn Remix',
            pathSong: './assests/music/list-song/3.mp3',
            duration : '04:27',
        },
        {
            background: './assests/img/songs/4.webp',
            name: 'Vui Lắm Nha',
            singer: 'Hương Ly, Jombie, RIN Music Remix',
            pathSong: './assests/music/list-song/4.m4a',
            duration : '05:25',
        },
        {
            background: './assests/img/songs/5.webp',
            name: 'Lưu Số Em Đi',
            singer: 'Huỳnh Văn, V.P. Tiên, Đại Mèo Remix',
            pathSong: './assests/music/list-song/5.m4a',
            duration : '05:42',
        },
        {
            background: './assests/img/songs/6.webp',
            name: 'Như Một Người Dưng',
            singer: 'Nguyễn Thạc Bảo Ngọc, Remix',
            pathSong: './assests/music/list-song/6.mp3',
            duration : '05:56',
        },
        {
            background: './assests/img/songs/7.webp',
            name: 'Ôm Nhiều Mộng Mơ',
            singer: 'Phát Huy T4, Đại Mèo Remix',
            pathSong: './assests/music/list-song/7.m4a',
            duration : '03:16',
        },
        {
            background: './assests/img/songs/8.jpg',
            name: 'Tình Yêu Ngủ Quên',
            singer: 'Hoàng Tôn, LyHan, Orinn Remix',
            pathSong: './assests/music/list-song/8.mp3',
            duration : '02:55',
        },
        {
            background: './assests/img/songs/9.webp',
            name: 'Không Bằng',
            singer: 'Na, RIN Music Remix',
            pathSong: './assests/music/list-song/9.m4a',
            duration : '04:00',
        },
        {
            background: './assests/img/songs/10.webp',
            name: 'Ai Chung Tình Được Mãi',
            singer: 'Đinh Tùng Huy, ACV Remix',
            pathSong: './assests/music/list-song/10.m4a',
            duration : '06:16',
        },
        {
            background: './assests/img/songs/11.webp',
            name: 'Cô Đơn Dành Cho Ai',
            singer: 'NAL, LEE KEN, Orinn Remix',
            pathSong: './assests/music/list-song/11.m4a',
            duration : '05:05',
        },
        {
            background: './assests/img/songs/12.webp',
            name: 'Ánh mắt ta chạm nhau',
            singer: 'Ngô Lan Hương, Đại Mèo remix',
            pathSong: './assests/music/list-song/12.m4a',
            duration : '05:12',
        },
        {
            background: './assests/img/songs/13.webp',
            name: '2 Phút Hơn',
            singer: 'Phao, KAIZ Remix',
            pathSong: './assests/music/list-song/13.m4a',
            duration : '04:20',
        },
        {
            background: './assests/img/songs/14.webp',
            name: 'Là Ai Từ Bỏ Là Ai Vô Tình',
            singer: 'Hương Ly, Jombie (G5R), RIN Music Remix',
            pathSong: './assests/music/list-song/14.m4a',
            duration : '04:57',
        },
        {
            background: './assests/img/songs/2.jpeg',
            name: 'Yêu Đừng Sợ Đau',
            singer: 'Ngô Lan Hương, Cukak Remix',
            pathSong: './assests/music/list-song/15.m4a',
            duration : '03:53',
        },
    ],

    renderSongsItem: function() {
        const htmls = this.songsData.map((song, index) => {
            return `
                <li class="songs-item ${index === this.currentIndex ? 'songs-item--active' : ''}" data-index=${index}>
                    <div class="songs-item-left">
                        <div style="background-image: url(${song.background});" class="songs-item-left-img"></div>
                        <div class="songs-item-left-body">
                            <h3 class="songs-item-left-body-name">${song.name}</h3>
                            <span class="songs-item-left-body-singer">${song.singer}</span>
                        </div>
                    </div>
                    <div class="songs-item-center">
                        <span>Anh Đã Lạc Vào (Remix)</span>
                    </div>
                    <div class="songs-item-right">
                        <span class="songs-item-right-heart">
                            <i class="fas fa-heart songs-item-right-heart-active"></i>
                            <i class="far fa-heart songs-item-right-heart-non active"></i>
                        </span>
                        <span class="songs-item-right-duration">${song.duration}</span>
                    </div>
                </li>
            `
        })
        $('.option-all__songs-list').innerHTML = htmls.join('');
    },

    defineProperties: function() {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songsData[this.currentIndex]
            }
        })
    },

    toastSlider: function() {
        const toastMain = $('#toast');
        if(toastMain) {
            const toast = document.createElement('div');
            toast.classList.add('toast');
            toast.innerHTML = `
                <div class="toast-item">
                    <span class="text">Chức năng đang được phát triển. Vui lòng thử lại sau !</span>
                </div>
            `;
            toastMain.appendChild(toast);
            setTimeout(function() {
                toastMain.removeChild(toast);
            }, 3000)
        }
    },

    formatTime : function(number) {
        const minutes = Math.floor(number / 60);
        const seconds = Math.floor(number - minutes * 60);
        return `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
    },

    displayRemainTime : function() {
        remainTime.textContent = this.formatTime(audio.currentTime);
    },

    displayDurationTime : function() {
        durationTime.textContent = this.currentSong.duration;
    },

    loadCurrentSong: function() {
        musicControlLeftImg.style.backgroundImage = `url(${this.currentSong.background})`;
        musicControlLeftContentSong.textContent = this.currentSong.name;
        musicControlLeftContentSinger.textContent = this.currentSong.singer;
        audio.src = this.currentSong.pathSong;
        this.displayDurationTime();
    },
    
    nextSong: function() {
        this.currentIndex++;
        if(this.currentIndex >= this.songsData.length){
            this.currentIndex = 0;
        }
        this.loadCurrentSong();
    },

    prevSong: function() {
        this.currentIndex--;
        if(this.currentIndex < 0) {
            this.currentIndex = this.songsData.length - 1;
        }
        this.loadCurrentSong();
    },

    randomSong: function() {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * this.songsData.length);
        }while(newIndex === this.currentIndex);
        this.currentIndex = newIndex;
        this.loadCurrentSong();
    },

    scrollToActiveSong: function() {
        setTimeout(() => {
            $(".songs-item--active").scrollIntoView({
                behavior: "smooth",
                block: "nearest",
            });
        }, 100)
    },
    
    handleEvents: function() {
        const _this = this;
        var sliderIndex = 1;
        var sliderLenght = _this.songsData.length;
        var heartBot = $('.music__control-left-action-heart-wrapper');
        var songHearts = $$('.songs-item-right.songs-item-right-heart');

        sideBars.forEach((sideBar, index )=> {
            sideBar.onclick = function() {
                $('.sidebar__item.sidebar__item-active').classList.remove('sidebar__item-active');
                sideBar.classList.add('sidebar__item-active');
                containerPanes[0].style.display = 'none';
                containerPanes[1].style.display = 'none';
                containerPanes[index].style.display = 'block';
            }
        })

        songHearts.forEach((songHeart, index) => {
            songHeart.onclick = function() {
                songHeart.classList.toggle('active');
            }
        })

        heartBot.onclick = function() {
            heartBot.classList.toggle('active');
        }

        changeImg = function() {
            sliderItems.forEach((item, index) => {
                if (index == sliderIndex) {
                    sliderItems[index].classList.replace('option-all__song-slider-img-third','option-all__song-slider-img-first');
                    sliderItems[index].classList.replace('option-all__song-slider-img-second','option-all__song-slider-img-first');
                } else if (index == sliderIndex + 1) {
                    sliderItems[index].classList.replace('option-all__song-slider-img-first','option-all__song-slider-img-second');
                    sliderItems[index].classList.replace('option-all__song-slider-img-third','option-all__song-slider-img-second');
                } else {
                    sliderItems[index].classList.replace('option-all__song-slider-img-first','option-all__song-slider-img-third');
                    sliderItems[index].classList.replace('option-all__song-slider-img-second','option-all__song-slider-img-third');
                }
                if (sliderIndex == sliderLenght - 1) {
                    sliderItems[0].classList.replace('option-all__song-slider-img-first','option-all__song-slider-img-second');
                    sliderItems[0].classList.replace('option-all__song-slider-img-third','option-all__song-slider-img-second');
                }
            })
            sliderIndex++;
            if (sliderIndex >= sliderLenght) {
                sliderIndex = 0;
            }
        };
        setInterval(changeImg, 2000);

        playBtn.onclick = function() {
            if(_this.isPlaying) {
                audio.pause();
            }
            else {
                audio.play();
            }
        };

        const cdThumbAnimate = musicControlLeftImg.animate([{ transform: "rotate(360deg)" }], {
            duration: 10000,
            iterations: Infinity
        });
        cdThumbAnimate.pause();

        audio.onplay = function () {
            _this.isPlaying = true;
            playBtn.classList.add('playing');
            cdThumbAnimate.play();
        };

        audio.onpause = function () {
            _this.isPlaying = false;
            playBtn.classList.remove('playing');
            cdThumbAnimate.pause(); 
        };

        audio.ontimeupdate = function () {
            if(audio.duration) {
                const progressPercent = Math.floor((audio.currentTime / audio.duration) * 100);
                progress.value = progressPercent;
            }
            _this.displayRemainTime();
        };

        progress.onchange = function (e) {
            const seekTime = audio.duration / 100 * e.target.value;
            audio.currentTime = seekTime;
        };

        prevBtn.onclick = function () {
            if(_this.isRandom) {
                _this.randomSong();
            }
            else {
                _this.prevSong();
            }
            audio.play();
            _this.renderSongsItem();
            _this.scrollToActiveSong();
        };

        nextBtn.onclick = function() {
            if(_this.isRandom) {
                _this.randomSong();
            }
            else {
                _this.nextSong();
            }
            audio.play();
            _this.renderSongsItem();
            _this.scrollToActiveSong();
        }

        randomBtn.onclick = function() {
            _this.isRandom = !_this.isRandom;
            _this.isReplay = false;
            randomBtn.classList.toggle("music-control__icon-random--active", _this.isRandom);
            replayBtn.classList.toggle("music-control__icon-replay--active", _this.isReplay);
        }

        replayBtn.onclick = function() {
            _this.isReplay = !_this.isReplay;
            _this.isRandom = false;
            replayBtn.classList.toggle("music-control__icon-replay--active", _this.isReplay);
            randomBtn.classList.toggle("music-control__icon-random--active", _this.isRandom);
        }

        audio.onended = function () {
            if(app.isReplay) {
                audio.play();
            }
            else {
                app.nextSong();
                audio.play();
            }
        }

        $$('.js__toast').forEach((item, index) => {
            item.onclick = function( ) {
                _this.toastSlider();
            }
        })

        headerSetting.onclick = function() {
            headerSetting.classList.toggle('active');
            headerOverlay.classList.remove('hiden');
        }

        headerSettingList.onclick = function(e) {
            e.stopPropagation();
            headerOverlay.classList.add('hiden');
            headerSetting.classList.remove('active');
        }

        headerOverlay.onclick = function() {
            headerSetting.classList.remove('active');
            headerOverlay.classList.add('hiden');
        }

        volumeIcon.onclick = function() {
            _this.isMute = !_this.isMute;
            volumeIcon.classList.toggle('active', _this.isMute);
            if(_this.isMute) {
                audio.volume = 0;
                volumeProgress.value = 0;
            }
            else {
                audio.volume = _this.volume / 100;
                volumeProgress.value = _this.volume;
            }
        }

        volumeProgress.onchange = function(e) {
            _this.volume = e.target.value;
            audio.volume = e.target.value / 100;
            if (e.target.value == 0) {
                volumeIcon.classList.add('active')
                _this.isMute = true;
            } else {
                volumeIcon.classList.remove('active');
                _this.isMute = false;
            }
        }
 
    },
    

    start: function() {
        this.renderSongsItem();
        
        this.defineProperties();

        this.loadCurrentSong();
        
        this.handleEvents();
    }
}

app.start();