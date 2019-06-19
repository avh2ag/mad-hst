var bp = {
    mobile: 0,
    tablet: 768,
    desktop: 1025
},
Site = {
    siteWide: function() {
        if ($(".insta").embedagram({
                instagram_id: 207790985,
                thumb_width: 306,
                limit: 6
            }), $(".back-top").on("click", function(e) {
                return e.preventDefault(), $("body").animate({
                    scrollTop: "0px"
                }, 400), !1
            }), $("#contact-reason").on("change", function(e) {
                "Location Specific" == $(this).val() ? ($("#select-location").prop("disabled", !1).trigger("chosen:updated"), $("#select-location").attr("required", "true")) : ($("#select-location").val("").trigger("chosen:updated"), $("#select-location").prop("disabled", !0).trigger("chosen:updated"), $("#select-location").attr("required", "false"))
            }), $(".popup .close").on("click", function(e) {
                e.preventDefault(), $(this).parents(".location-overlay").hide()
            }), $(".popup .item").on("click", function(e) {
                $.post("/api/store-location", {
                    mylocation: $(this).attr("id")
                }).done(function(e) {
                    $("#my-location-link").attr("href", e)
                });
                var i = "/api/update-session-variable/todays_class/" + $(this).attr("id");
                $.post(i, {
                    mylocation: $(this).attr("id")
                }).done(function(e) {
                    $(this).parents(".location-overlay").hide(), location.reload()
                })
            }), $(".set-location").on("click", function(e) {
                $.post("/api/store-location", {
                    mylocation: $(this).attr("value")
                }).done(function(e) {
                    $("#my-location-link").attr("href", e)
                })
            }), $(".set-location").on("click", function(e) {
                var i = "/api/update-session-variable/todays_class/" + $(this).attr("value");
                $.post(i, {
                    mylocation: $(this).attr("value")
                })
            }), $("#lpicker").on("change", function() {
                $(this).parents(".location-overlay").hide(), $.post("/api/store-location", {
                    mylocation: this.value
                }).done(function(e) {
                    $("#my-location-link").attr("href", e)
                });
                var e = "/api/update-session-variable/todays_class/" + this.value;
                $.post(e, {
                    mylocation: this.value
                }).done(function(e) {
                    location.reload()
                })
            }), $("#lpicker-mobile").on("change", function() {
                $.post("/api/store-location", {
                    mylocation: this.value
                }).done(function(e) {
                    $("#my-location-link").attr("href", e)
                });
                var e = "/api/update-session-variable/todays_class/" + this.value;
                $.post(e, {
                    mylocation: this.value
                }).done(function(e) {
                    location.reload()
                })
            }), $("#blog-cat, #blog-loc").on("change", function() {
                var e = $(this).val();
                return e && (window.location = e), !1
            }), $(".chosen-select").chosen({
                disable_search_threshold: 100
            }), Modernizr.touch, $("#timesSlider").bxSlider({
                pager: !1,
                controls: !0,
                nextText: "",
                prevText: "",
                nextSelector: "#slideNext",
                prevSelector: "#slidePrev",
                minSlides: 3,
                maxSlides: 3,
                slideWidth: "80px",
                infiniteLoop: !1,
                onSliderLoad: function() {
                    $("#timesSlider").css("display", "block")
                }
            }), $(".dropdown").on("click", function(e) {
                e.preventDefault(), $(".dropdown, .subnav, .overlay").toggleClass("open")
            }), $(".overlay").on("click", function(e) {
                e.preventDefault(), $(".dropdown, .subnav, .overlay").removeClass("open")
            }), $("#timesSlider li").hover(function() {
                var e = $(this).index();
                $(".details_wrap ul").eq(e).addClass("active"), $(".details_wrap").addClass("active")
            }, function() {
                var e = $(this).index();
                $(".details_wrap ul").eq(e).removeClass("active"), $(".details_wrap, .details_wrap ul").removeClass("active")
            }), $(".details_wrap ul").hover(function() {
                $(this).addClass("active"), $(".details_wrap").addClass("active");
                var e = $(this).index();
                $("#timesSlider li").eq(e).addClass("active")
            }, function() {
                $(".details_wrap, .details_wrap ul").removeClass("active"), $("#timesSlider li").removeClass("active")
            }), Modernizr.flexbox || $("#timesSlider li").hover(function() {
                var e = $(this).index();
                $(".details_wrap").show(), $(".details_wrap ul").eq(e).show()
            }, function() {
                var e = $(this).index();
                $(".details_wrap").hide(), $(".details_wrap ul").eq(e).hide()
            }), Modernizr.touch && 767 < $(window).width()) {
            var e = $(window).height();
            $(".fp-section, .fp-slide, .fp-tableCell, .fp-section .inner").css("height", e - 100), $("#section-1 .video-wrap.interior").css("height", e - 276)
        }
        var i; - 1 != navigator.appVersion.indexOf("Win") && $("*").filter(function() {
            return -1 < $(this).css("font-family").toLowerCase().indexOf("microbrew") && $(this).css("font-size").split("px").join("") < 30
        }).addClass("win-safe-text");
        if ($(".js-play-sound").length) {
            var t = $(".js-play-sound"),
                a = $("#" + t.data("video"));
            t.click(function() {
                a[0].muted ? a[0].muted = !1 : a[0].muted = !0
            })
        }
    },
    mediaQueries: function() {
        var e = [],
            i = [];
        enquire.register("screen and (max-width:767px)", {
            match: function() {
                e.push($(".header .schedule").detach()), $(".home_callout").after(i)
            },
            unmatch: function() {}
        }), enquire.register("screen and (min-width:768px)", {
            match: function() {
                $(".header_wrap").after(e), i.push($(".mobile_schedule").detach())
            },
            unmatch: function() {}
        })
    },
    home: function() {
        $("#homeSlider").bxSlider({
            pager: !0,
            controls: !0,
            nextText: "",
            prevText: "",
            infiniteLoop: !0,
            slideMargin: 0,
            onSliderLoad: function(e) {
                $("#homeSlider li").eq(e + 1).addClass("active-slide"), $("#homeSlider li").eq(e + 1).next().addClass("right")
            },
            onSlideAfter: function(e, i, t) {
                _activeSlide = $("#homeSlider li").eq(t + 1), _activeSlide.addClass("active-slide"), $("#homeSlider li").removeClass("left right"), _activeSlide.prev().addClass("left"), _activeSlide.next().addClass("right")
            },
            onSlideBefore: function(e, i, t) {
                $("#homeSlider li").removeClass("active-slide")
            }
        });
        var e = [];
        e.push($(".bx-pager").detach()), $(".home_callout .wrap").after(e)
    },
    forms: function() {
        $.validator.setDefaults({
            ignore: ":hidden:not(select)"
        }), $("select").change(function() {
            $('label[for="' + $(this).attr("name") + '"].error').hide()
        }), $(".validate").each(function() {
            $(this).validate({
                rules: {
                    email: {
                        email: !0
                    }
                },
                errorPlacement: function(e, i) {
                    i.hasClass("chosen-select") ? e.insertAfter(".chosen-container") : e.insertAfter(i)
                }
            })
        })
    },
    video: function() {
        $(window).bind("load", function() {
            $(".video-player").each(function(e, i) {
                var t = {
                    ambient: !0,
                    doLoop: !0,
                    loop: !0
                };
                BV = new $.BigVideo(t), BV.init(), vidFile = $(".video-player").data("video"), poster = $(".video-player").data("poster"), vidAlt = $(".video-player").data("videoalt"), Modernizr.touch ? BV.show(poster) : BV.show(vidFile, {
                    autoplay: !0,
                    forceAutoplay: !0,
                    ambient: !0,
                    doLoop: !0,
                    loop: !0,
                    useFlashForFirefox: !1
                }), player = BV.getPlayer(), player.on("loadedmetadata", function() {
                    $(".video-player").show()
                })
            })
        })
    },
    multiple_videos: function() {
        $(window).bind("load", function() {
            var e = $(".video-player");
            _multiPlayer = [], $.each(e, function(e, i) {
                _multiPlayer[e] = new $.BigVideo({
                    container: $(i),
                    id: e,
                    ambient: !0,
                    doLoop: !0,
                    loop: !0
                }), _multiPlayer[e].init(), Modernizr.touch ? (_multiPlayer[e].show($(i).data("poster")), $("body").addClass("poster")) : _multiPlayer[e].show($(i).data("video"), {
                    autoplay: !0,
                    altSource: $(i).data("videoalt"),
                    forceAutoplay: !0,
                    ambient: !0,
                    doLoop: !0,
                    loop: !0,
                    useFlashForFirefox: !1
                })
            }), $("#panel-layout").hasClass("fp-responsive") || $(".vjs-tech").not(".fp-section:first-of-type .vjs-tech").each(function() {
                this.pause()
            })
        })
    },
    tabs: function() {
        $(".tabs a").on("click", function() {
            $(".tabs a").removeClass("current"), $(this).addClass("current"), $(".tab-content").hide();
            var e = $(this).attr("href");
            return $(e).show(), $("html").hasClass("touch") && $("body, html").animate({
                scrollTop: $($(this).attr("href")).offset().top - 50
            }, 500), !1
        })
    },
    blog: function() {
        $(".blog-header").bxSlider({
            pager: !0,
            controls: !1,
            nextText: "",
            prevText: "",
            mode: "fade",
            infiniteLoop: !1,
            minSlides: 1,
            maxSlides: 1,
            onSlideBefore: function(e, i, t) {
                $(".item-wrap").eq(i).addClass("navOutPrev"), $(".item-wrap").eq(t).addClass("navInPrev")
            },
            onSlideAfter: function(e, i, t) {
                $(".item-wrap").removeClass("navOutPrev"), $(".item-wrap").removeClass("navInPrev"), $(".item-wrap").removeClass("current"), e.addClass("current")
            }
        })
    },
    slidingPanels: function() {
        $(".container-vid .wrap a").on("click", function(e) {
            e.preventDefault();
            var i = $(this).index() + 2;
            $.fn.fullpage.moveTo(i)
        }), $(".down-arrow").on("click", function(e) {
            e.preventDefault(), $.fn.fullpage.moveTo(2)
        });
        var e = $("#panel-layout .section").map(function(e) {
            return $(this).attr("data-section-anchor")
        });
        0 <= window.location.href.indexOf("/about-us") && 767 < $(window).width() && 650 < $(window).height() ? scrollOverflow = !0 : scrollOverflow = !1, $("#panel-layout").fullpage({
            anchors: e,
            scrollOverflow: scrollOverflow,
            css3: !0,
            easingcss3: "linear",
            navigation: !0,
            navigationPosition: "right",
            responsive: 768,
            loopHorizontal: !1,
            paddingTop: 100,
            normalScrollElements: ".footer, .chosen-drop, .chosen-results",
            menu: "#menu",
            onLeave: function(e, i, t) {
                _thisSection = $(this), _nextSection = $(".section").eq(i - 1);
                var a = $(".section").size(),
                    n = _thisSection.find(".fp-slide").size() - 1;
                e == a - 1 && "down" == t ? $(".secondary-nav").addClass("showing-footer") : $(".secondary-nav").removeClass("showing-footer"), 1 == e && "down" == t && $(".secondary-nav").addClass("active"), (2 == e && "up" == t || $("#section-1").hasClass("active")) && $(".secondary-nav").removeClass("active"), $(".section").removeClass("move-section-down move-section-up"), $("#panel-layout").hasClass("fp-responsive") || _nextSection.find(".vjs-tech").each(function() {
                    this.play()
                }), _thisSection.find(".fp-slide").removeClass("active"), _thisSection.find(".fp-slide").eq(0).addClass("active")
            },
            afterLoad: function(e, i, t) {
                _currentSection = $(this);
                var a = $(".section").size(),
                    n = $(".section").eq(a - 2);
                if (i == a - 1 || i == a ? n.addClass("showing-footer") : n.removeClass("showing-footer"), $("#panel-layout").hasClass("fp-responsive") || _thisSection.find(".vjs-tech").each(function() {
                        this.pause()
                    }), $(".section").removeClass("move-section-down move-section-up"), _currentSection.has(".fp-slide").length) {
                    var o = _currentSection.find(".fp-slide.active").index();
                    o + 1 == a ? _currentSection.addClass("move-section-down") : 0 == o ? _currentSection.addClass("move-section-up") : $(".section").removeClass("move-section-down move-section-up")
                }
                _thisSection.find(".fp-slide").removeClass("active"), i == a ? _thisSection.find(".fp-slide").eq(4).addClass("active") : _thisSection.find(".fp-slide").eq(0).addClass("active"), $(".section:not(.active)").each(function() {
                    $(".fp-slide.fp-first").removeClass("animate-out left").addClass("animate-in right")
                }), _currentSection.find(".fp-slide.active").removeClass("animate-in right").addClass("animate-out"), _currentSection.find(".fp-slide.animate-out").nextAll().addClass("right"), _currentSection.find(".fp-slide.animate-out").prevAll().addClass("left");
                var s = _currentSection.find(".fp-slide.active").index();
                $(".nav-pager").removeClass("active"), _currentSection.find(".nav-pager").eq(s).addClass("active"), $(".callout-nav a").removeClass("active"), $(".callout-nav a").eq(o).addClass("active")
            },
            afterSlideLoad: function(e, i, t, a) {
                _currentSlide = $(".fp-slide.active"), $(".fp-slide").removeClass("animate-in animate-out left right"), $(".section:not(.active)").find(".fp-slide").addClass("animate-in right"), _currentSection.find(".fp-slide").addClass("animate-in"), _currentSection.find(".fp-slide.active").removeClass("animate-in right").addClass("animate-out"), _currentSection.find(".fp-slide.animate-out").nextAll().addClass("right"), _currentSection.find(".fp-slide.animate-out").prevAll().addClass("left");
                var n = $(this).parents(".section").find(".slide").size(),
                    o = $(this).parents(".section"),
                    s = _currentSlide.index();
                $(".callout-nav a").removeClass("active"), $(".callout-nav a").eq(t).addClass("active"), slideNumIndex = $(this).index() + 1, $(".slide-nav a").removeClass("disabled"), slideNumIndex == n && $(".nav-next").addClass("disabled"), 1 == slideNumIndex && $(".nav-prev").addClass("disabled");
                var l = $(this).parents(".section").find(".fp-slide.active").index();
                $(".nav-pager").removeClass("active"), $(this).find(".nav-pager").eq(l).addClass("active"), $(".section").removeClass("move-section-down move-section-up"), slideNumIndex == n ? o.addClass("move-section-down") : 1 == slideNumIndex ? o.addClass("move-section-up") : $(".section").removeClass("move-section-down move-section-up")
            },
            onSlideLeave: function(e, i, t, a) {}
        }), $(".slide-nav .nav-prev").on("click", function(e) {
            e.preventDefault(), $(this).parents(".section").find(".fp-prev").trigger("click")
        }), $(".slide-nav .nav-next").on("click", function(e) {
            e.preventDefault(), $(this).parents(".section").find(".fp-next").trigger("click")
        }), $(".slide-nav .nav-pager").on("click", function() {
            var e = $(this).parents(".section").index() + 1,
                i = $(this).index();
            $.fn.fullpage.moveTo(e, i)
        }), $(".callout-nav a").on("click", function(e) {
            e.preventDefault();
            var i = $(this).index();
            $.fn.fullpage.moveTo("the-perfect-week", i)
        }), $(".week-1").on("click", function(e) {
            e.preventDefault(), $(".week-2").removeClass("active"), $(this).addClass("active"), $(".sched-2").hide(), $(".sched-1").show()
        }), $(".week-2").on("click", function(e) {
            e.preventDefault(), $(".week-1").removeClass("active"), $(this).addClass("active"), $(".sched-1").hide(), $(".sched-2").show()
        })
    },
    mobileCarousel: function() {
        var s = $(window),
            l = s.width(),
            r = "is-active",
            e;
        $(".js-mobile-only-carousel").each(function() {
            var t = $(this),
                e = t.closest(".js-carousel"),
                i = {
                    adaptiveHeight: !0,
                    arrows: !0,
                    dots: t.data("carousel-dots"),
                    slidesToShow: 1
                },
                a;

            function n() {
                return l < bp.tablet || !(l >= bp.tablet) && void 0
            }

            function o() {
                n() ? t.not(".slick-initialized").slick(i) : t.hasClass("slick-initialized") && t.slick("unslick")
            }
            o(), s.on("resize", function() {
                l = s.width(), o()
            }), e.find(".js-carousel-nav-button").each(function() {
                var e = $(this),
                    i = e.data("carousel-slide");
                e.click(function() {
                    e.hasClass(r) || (e.addClass(r).siblings().removeClass(r), t.slick("slickGoTo", i))
                })
            }), t.on("afterChange", function(e, i, t) {
                var a;
                $(".js-carousel-nav-button").filter('[data-carousel-slide="' + t + '"]').trigger("click")
            })
        })
    },
    jumpto: function() {
        var e;

        function a(e) {
            $("html, body").animate({
                scrollTop: e.offset().top - $(".header").outerHeight()
            }, 1e3)
        }
        $(".js-jump-to-button").each(function() {
            var e = $(this),
                i = e.attr("href"),
                t = e.data("jump-to-section");
            e.click(function(e) {
                i ? a($(i)) : t && a($("#" + t)), e.preventDefault()
            })
        })
    },
    siteWideBanner: function() {
        var e = $(".js-sitewide-banner"),
            i = e.find(".js-sitewide-banner-details"),
            t = e.find(".js-sitewide-banner-ribbon"),
            a = e.find(".js-sitewide-banner-toggle");
        window.setTimeout(function() {
            t.slideDown()
        }, 1e3), a.on("click", function() {
            i.slideToggle(), e.toggleClass("is-visible")
        })
    },
    siteWideBannerForm: function() {
        var a = $(".js-banner-form"),
            e = a.find(".js-submit-banner-form"),
            i = $(".js-sitewide-banner"),
            t = i.find(".js-sitewide-banner-details"),
            n = $(".js-banner-content"),
            o = $(".js-close-banner-btn"),
            s = "is-invalid",
            l = "is-visible";
        a.on("submit", function(e) {
            e.preventDefault();
            var i = a.find('[type="email"]').val(),
                t;
            i && /\S+@\S+\.\S+/.test(i) ? (a.find(".sitewide-banner__form__button").attr("disabled", "disabled"), $.post("/form/download", a.serialize()).done(function(e) {
                "success" == e.status ? (n.addClass(l), o.addClass(l), a.removeClass(s), a.find(".sitewide-banner__form__button").removeAttr("disabled")) : window.alert(e.message)
            })) : a.addClass(s)
        }), o.on("click", function() {
            t.slideUp(), n.removeClass(l), o.removeClass(l), i.toggleClass(l), a[0].reset()
        })
    },
    franchiseBannerForm: function() {
        var i = $(".js-franchise-banner"),
            e = i.find(".js-franchise-form"),
            t = e.find(".js-submit-franchise-form"),
            a = e.find('[name="email"]'),
            n = e.find('[name="full-name"]');
        console.log(i, e, a, n);
        var o = "is-invalid",
            s = "is-visible";

        function l() {
            var e = "is-sent";
            i.addClass(e), console.log("Thank You!")
        }
        e.validate({
            rules: {
                email: {
                    required: !0,
                    email: !0
                },
                fullName: {
                    required: !0
                }
            },
            submitHandler: function(i) {
                $.post("/form/download", $(i).serialize()).done(function(e) {
                    "success" == e.status ? (i.reset(), l()) : window.alert(e.message)
                })
            }
        })
    },
    // @avh2ag adding function for presale banner
    foundingMemberInfoForm: function() {
        var foundingMember = $(".js-founding-member"),
            moreInfoButton = $(".js-more-info"),
            presaleForm = $(".js-founding-member-form"),
            thankYou = $('.js-thank-you'),
            submitPresaleForm = presaleForm.find(".js-submit-founding-member-form"),
            a = presaleForm.find('[name="email"]');
            // n = presaleForm.find('[name="full-name"]');
        var o = "is-invalid",
            s = "is-visible";
        moreInfoButton.on("click", function() {
            presaleForm.show();
            thankYou.hide();
            $("html, body").animate({
                scrollTop: presaleForm.offset().top
            }, 1e3)
            
        });
        function postSubmit() {
            var postSubmitClass = "is-sent";
            presaleForm.hide();
            thankYou.show();
        }
        submitPresaleForm.on('click', function(e) {
            e.preventDefault();
            postSubmit();
            var url = "https://script.google.com/macros/s/AKfycbx27FbvB-kX8julS8E9iJPg1ZHH-ooOHzF7K-Xwe4ro9e835F43/exec";
            // console.log(e, presaleForm.serialize());
            var jqxhr = $.ajax({
              url: url,
              method: "GET",
              dataType: "json",
              data: presaleForm.serialize()
            }).success();
        });
    },
    init: function() {
        _self = this, 
            _self.siteWide(),
            _self.mediaQueries(),
            _self.home(),
            _self.siteWideBanner(),
            _self.siteWideBannerForm(),
            _self.foundingMemberInfoForm(),
            $(".js-franchise-banner").length && _self.franchiseBannerForm(),
                        // @avh2ag override
            $("form").length && _self.forms(), 
            $(".video-player.single").length && _self.video(),
            $("#panel-layout").length && _self.multiple_videos(),
            $(".tabs").length && _self.tabs(),
            $(".blog-panel").length && _self.blog(),
            $("#panel-layout").length && _self.slidingPanels(),
            $(".js-mobile-only-carousel").length && _self.mobileCarousel(); 
            // Query(".js-jump-to-button").length && _self.jumpto();
    }
};
$(function() {
Site.init()
});