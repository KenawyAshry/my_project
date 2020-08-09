let landingPage = document.getElementById('header');

const imgArray = ["big1.jpg", "big2.jpg", "big3.jpg", "big4.jpg", "big5.jpg", "big5.jpg", "big7.jpg", "big8.jpg"];


let backgroundOption = true; // لو هي ترو الباك هتشتغل لو خليتها فولس الباك توقف
let backgroundInterval; // دا فار عشان اتحكم ف فانكشن الانتيرفال واوقفها بيه

//// change randome background option 

let randomBack = document.querySelectorAll('.back-option span');
randomBack.forEach(span => {
    span.addEventListener("click", (e) => {
        // هنا هشيل كلاس الاكتف من الكل وبحطه ع اللي دوست عليه 
        e.target.parentElement.querySelectorAll('.active').forEach(elment => {

            elment.classList.remove('active'); // شلته من الكل

        });
        e.target.classList.add('active'); ///  هنا حطيت الكلاس ع اللي دوست عليه

        if (e.target.dataset.back === 'yes') {
            backgroundOption = true;
            randomizeImgs();
            localStorage.setItem("background_option", true);
            // console.log(backgroundOption);
        } else {
            backgroundOption = false;
            clearInterval(backgroundInterval);
            localStorage.setItem("background_option", false);
        }

    });

});
////////  تشيك لو فيه باك ف الوكال ستورج
let backgroundItem = localStorage.getItem("background_option");

if (backgroundItem !== null) {
    if (backgroundItem === 'true') {
        backgroundOption = true;
    } else {
        backgroundOption = false;
    }
    console.log(backgroundItem);
    // remove active from all span
    document.querySelectorAll('.back-option span').forEach(span => {

        span.classList.remove('active');

    });


    if (backgroundItem === 'true') {
        document.querySelector(".back-option .yes").classList.add('active');
        console.log(backgroundItem);
    } else {
        document.querySelector(".back-option .no").classList.add('active');
        console.log(backgroundItem);
    }


}


//// function randomize back ground 
function randomizeImgs() {
    if (backgroundOption === true) {
        backgroundInterval = setInterval(() => {
            // بجيب رقم عشولئي من الاراي
            let reandomImge = Math.floor(Math.random() * imgArray.length);
            // console.log(reandomImge);
            // بغير الصور 
            landingPage.style.backgroundImage = 'URL("imges/' + imgArray[reandomImge] + '")';
        }, 10000);

    }
}
randomizeImgs();
//////////// setting box 
document.querySelector('.setting-box .fa-gear').onclick = function () {
    this.classList.toggle('fa-spin');
    document.querySelector('.setting-box').classList.toggle('open')
}


////////// change colors 
/// 
let colorsLi = document.querySelectorAll('.color-option li');
colorsLi.forEach(li => {

    li.addEventListener("click", (e) => {

        // console.log(e.target.dataset.color);
        let dataColor = e.target.dataset.color;
        document.documentElement.style.setProperty('--main-back', dataColor);

        // set colors on local stroge
        localStorage.setItem('color-option', dataColor); //  بس هنا انا حطتله قيمه ف مش هيبقي فاضي

        // هنا هشيل كلاس الاكتف من الكل وبحطه ع اللي دوست عليه 

        e.target.parentElement.querySelectorAll('.active').forEach(elment => {

            elment.classList.remove('active'); // شلته من الكل

        });
        e.target.classList.add('active'); ///  هنا حطيت الكلاس ع اللي دوست عليه
    });

});
////////  تشيك لو فيه الوان ف الوكال ستورج
const mainColors = localStorage.getItem('color-option'); // هنا جبلي انه فاضي 
console.log(mainColors);
if (mainColors !== null) {
    //  هنا بقوله لو الوكال ستورج مش فاضي حطلي اللون ع الروت اللي انا عملتله سيت فوق
    document.documentElement.style.setProperty('--main-back', mainColors);
    // هتشيك  ع الكلاس الاكتف واشيله
    document.querySelectorAll('.color-option li').forEach(elment => {

        elment.classList.remove('active'); // شلته من الكل

        /// اضيف الاكتف كلاس االلي  ف اللوكال ستورج
        if (elment.dataset.color === mainColors) {
            elment.classList.add('active');
        }
    });
}
// console.log(colorsLi);