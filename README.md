# Static-web
## Nội dung website:
*Website này mang có nội dung chia sẻ về các món ăn ,công thức nấu nướng các công thức món ăn,những mẹo nhỏ khi nấu nướng và những thực đơn tốt cho sức khỏe.
*Người dùng cũng có thể chia sẻ hình ảnh, công thức của bản thân.
### Homepage:
![alt text](./images/screenshot1.png "title")
![alt text](./images/screenshot2.png "title")
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/home.css">
    <script src="./js/main.js"></script>
    <title>Better Meals </title>
</head>

<body>
    <header>
        <img src="./images/logo1.JPG" alt=""style="height:150px;">
    </header>
    <div class="logo1">
        <img src="./images/logo5.JPG" alt="" style="height: 70px;">
    </div>
    <div class="nav-container">
        <div class="user-container">
            <img class="user-icon icon" src="./images/icon-user.webp" alt="">
            <div class="sign-in">
                <a href="">Sign In</a>
                <a href="">Sign Up</a>
            </div>
        </div>
        <img class="search-icon icon" id="search-icon" src="./images/icon-search.webp" alt="">
        <nav>
            <ul>
                <li><a href="homepage.html">Home</a></li>
                <li><a href="aboutus.html">About us</a></li>
                <li><a href="meals.html">Meals</a></li>
                <li><a href="">Share</a></li>
            </ul>
        </nav>
    </div>
    <div class="content">
        <br>
        <div class="slide-container">
            <picture class="slides">
                <img src="./images/foodiesfeed.com_vietnamese-pho-ga-takeaway1.jpg" alt="" style="width: 100%;object-fit: cover;"
                    class="slide s1" title="nguồn foodiesfeed.com">
                <img src="./images/foodiesfeed.com_vietnamese-baguette-banh-mi1.jpg" alt="" style="width: 100%;object-fit: cover;"
                    class="slide" title="nguồn foodiesfeed.com" >
                <img src="./images/foodiesfeed.com_eating-korean-bibimbap-with-chopsticks1.jpg" alt=""
                    style="width: 100%;" class="slide" title="nguồn foodiesfeed.com">
                <img src="./images/bunr.jpg" alt="" style="width: 100%;object-fit: cover;"
                    class="slide"title="nguồn foodiesfeed.com" >
            </picture>
            <a class="prev" id="prev">&#10094;</a>
            <a class="next" id="next">&#10095;</a>
        </div>
        <h2 style="text-align: center; margin-top: 7vh; color: rgb(139, 140, 210);"> <strong>Bài viết</strong></h2>
        <div class="news-container">
            <section class="news">
                <img src="./images/istockphoto-1181369460-612x612.jpg" alt="" style="height:100%" class="col-3">
                <div class="col-9">
                    <h3>Thực đơn cho lá phổi của bạn.</h3>
                    <p>Trong cuộc sống hiện đại ngày nay,sự đô thị hóa kéo theo những vấn đề về không khí chính điều đó
                        đã làm gia tăng nguy cơ các bệnh về đường hô hấp.Vậy phải làm gì để có một lá phổi khỏe mạnh...
                    </p>
                </div>
            </section>
            <section class="news">
                <img src="./images/istockphoto-1183407909-612x612.jpg" alt="" style="height:100%" class="col-3">
                <div class="col-9">
                    <h3>Ăn uống hợp với tâm trạng.</h3>
                    <p> Tâm trạng của bạn ảnh hưởng đến mọi thứ trong cuộc sống và ngược lại,có thể bạn không tin nhưng
                        thứ chúng ta ăn vào hằng ngày cũng quyết định một phần tâm trạng của bạn đó...</p>
                </div>
            </section>
            <section class="news">
                <img src="./images/istockphoto-1200458828-612x612.jpg" alt="" style="height:100%" class="col-3">
                <div class="col-9">
                    <h3>Trổ tài nấu nướng với gia đình người ấy.</h3>
                    <p>Nếu bạn là một cô gái đang chuẩn bị ra mắt gia đình người yêu thì còn gì tuyệt vời hơn khi có cho
                        mình một thực đơn làm hài lòng các bậc phụ huynh,còn nếu bạn là một chàng trai thì biết nấu ăn
                        cũng sẽ là một điểm cộng lớn đấy...</p>
                </div>
            </section>
        </div>
    </div>
    <footer style="background-color:#81a5b8; margin-top: 5vh; max-width: 100%; min-height: 30vh; color: white;">
        <div class="col-3">
            <h3>Đối Tác của:</h3>
            <br>
            <hr>
            <br>
            <a href="https://kfcvietnam.com.vn"><img src="./images/kfc.png" alt="" style="height: 5vh;"></a><br>
            <p>Thương hiệu đồ ăn nhanh số 1 thế giới</p>
        </div>
        <div class="col-3 ">
            <h3>Fanpage</h3>
            <br>
            <hr>
            <br>
            <a href="https://www.facebook.com/profile.php?id=100010260390327"><img
                    src="./images/Facebook-Icon-2-1021x1024.png" alt="" style="height:5vh;"></a><br>
             <p>Better meals</p>   
        </div>
        <div class="col-3">
            <h3>Để lại Email của bạn.</h3>
            <br>
            <hr>
            <br>
            <p>Nhận thông báo về món ngon mỗi ngày.</p>
            <form action="" style="margin-top: 3vh;">
                <input type="text" style="min-width:50%;" class="email">
                <input class="submit-email" type="submit" value="Đăng ký" class="submit1">
            </form>
        </div>
        <div class="col-3">
            <h3>Thông tin liên hệ:</h3>
            <br>
            <hr>
            <br>
            <p> <b>Địa chỉ: </b>p302 Số 35 ngõ 521 Cổ Nhuế, Bắc Từ Liêm, Hà Nội,Việt Nam.</p><br>
            <p><b>Số Điện Thoại: </b> 0979788374.</p><br>
            <p><b>Email:</b> Cmmnstprd@gmail.com.</p>

        </div>
    </footer>
</body>

</html>
```
## Aboutus:
![alt text](./images/screenshot3.png "title")
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/aboutus.css">
    <script src="./js/main.js"></script>
    <title>Better Meals </title>
</head>

<body>
    <header>
        <img src="./images/logo1.JPG" alt=""style="height: 150px;">
    </header>
    <div class="logo1">
        <img src="./images/logo5.JPG" alt=""style="height: 70px;">
    </div>
    <div class="nav-container">
        <div class="user-container">
            <img class="user-icon icon" src="./images/icon-user.webp" alt="">
            <div class="sign-in">
                <a href="">Sign In</a>
                <a href="">Sign Up</a>
            </div>
        </div>
        <img class="search-icon icon" id="search-icon" src="./images/icon-search.webp" alt="">
        <nav>
            <ul>
                <li><a href="homepage.html">Home</a></li>
                <li><a href="aboutus.html">About us</a></li>
                <li><a href="meals.html">Meals</a></li>
                <li><a href="">Share</a></li>
            </ul>
        </nav>
    </div>
    <div class="content">
        <br>
        <section class="container" style="margin-top: 110px;">
            <br>
            <h1 style="text-align: center; margin-top: 5vh;">Câu Chuyện của chúng tôi</h1>
            <p style="margin: auto;padding: 20px; text-align: justify;" >
                &#160&#160&#160Ai cũng muốn ăn ngon nhưng rõ ràng là không phải ai cũng có thể nấu ra những thứ ngon miệng.Tất nhiên để
                có thể có được những món ngon như vậy người đầu bếp phải bỏ ra những công sức nhất định và chúng ta hoàn
                toàn có thể thưởng thức những món ngon đó với một mức giá xứng đáng với chất lượng.Nhưng đối với số đông
                chúng ta đều không có đủ kinh tế hoặc không đủ thời gian để đi ra những nhà hàng,vậy nên mọi người
                thường chọn cách tự nấu đồ ăn cho bản thân mình.Về chất lượng và độ ngon miệng thì còn phải tùy thuộc
                vào khả năng của mỗi người,nhưng chúng ta hoàn toàn có thể cải thiện bữa ăn mà bản thân nấu bằng cách
                học hỏi những công thức nấu nướng cũng như những mẹo nhỏ.
            </p><br>
            <img src="./images/foodiesfeed.com_chocolate-cake-for-dessert-after-dinner.jpg" alt="" style="width:80%;">
            <br>
            <em style="text-align: center;margin: auto;padding: 20px">Nguồn www.foodiesfeed.com</em>
            <p style="margin: auto;padding: 20px; text-align: justify;" >
                &#160&#160&#160Vậy thì bạn hãy cùng chúng tôi cải thiện khả năng vào bếp của mình và tự thưởng cho bản thân những món ăn ngon miệng do chính tay mình nấu.<strong>Better Meals</strong> mang đến cho bạn những công thức nấu ăn trên khắp thế giới được chia sẻ bởi những đầu bếp và chính những người không phải đầu bếp chuyên nghiệp.Bạn cũng có thể chia sẻ công thức nấu ăn của riêng mình cho người khác.Nấu ăn vốn là một công việc thú vị hãy làm tăng độ thú vị của nó bằng cách chia sẻ cho những người khác, kết bạn với những người có cùng gu ẩm thực.
            </p><br>
        </section>
        <section class="container" style="margin-top: 5vh; padding-bottom: 5vh;">
            <br>
            <h1 style="text-align: center; margin-top: 5vh;">Ẩm thực và văn hóa</h1>
            <p style="margin: auto;padding: 20px; text-align: justify;" >
                &#160&#160&#160Mỗi quốc gia mỗi nền văn hóa đều có cho mình những nét tinh túy riêng trong ẩm thực,nhắc đến nước Ý chúng ta nghĩ ngay đến món mỳ <strong>Spaghetti </strong> hay bánh <strong>Pizza</strong>
                Hàn Quốc với <strong>Kim chi, Kimbap</strong>,hay nước Nhật nổi tiếng với <strong>Shushi</strong> và những món hải sản nổi tiếng.Quả thật ẩm thực chính là một cách để quảng bá nền văn hóa rộng rãi.Món ăn càng được nhiều người biết đến thì vô hình chung nền văn hóa của quốc gia, vùng đất đó càng được lan rộng,ẩm thực có thể "mở rộng" đường biên giới.
            </p><br>
            <img src="./images/foodiesfeed.com_vietnamese-pho-ga-takeaway1.jpg" alt="" style="width:80%;"><br>
            <em style="margin: auto;padding: 20px">Món Phở gà nổi tiếng của Việt Nam là nức lòng bạn bè quốc tế</em>
            <p style="margin: auto;padding: 20px; text-align: justify;">
                &#160&#160&#160 <strong>Việt Nam</strong> là một quốc gia có tiếng trong bản đồ ẩm thực thế giới,bằng cách chia sẻ những công thức món ngon của bà, của mẹ chúng ta hãy cùng nhau đưa ẩm thực của Việt Nam trở nên rộng rãi hơn nữa với bạn bè quốc tế nhé.
            </p><br>

        </section>
    </div>
    <footer style="background-color:#81a5b8; margin-top: 5vh; max-width: 100%; min-height: 30vh; color: white;">
        <div class="col-3">
            <h3>Đối Tác của:</h3>
            <br>
            <hr>
            <br>
            <a href="https://kfcvietnam.com.vn"><img src="./images/kfc.png" alt="" style="height: 5vh;"></a><br>
            <p>Thương hiệu đồ ăn nhanh số 1 thế giới</p>
        </div>
        <div class="col-3 ">
            <h3>Fanpage</h3>
            <br>
            <hr>
            <br>
            <a href="https://www.facebook.com/profile.php?id=100010260390327"><img
                    src="./images/Facebook-Icon-2-1021x1024.png" alt="" style="height:5vh;"></a><br>
             <p>Better meals</p>   
        </div>
        <div class="col-3">
            <h3>Để lại Email của bạn.</h3>
            <br>
            <hr>
            <br>
            <p>Nhận thông báo về món ngon mỗi ngày.</p>
            <form action="" style="margin-top: 3vh;">
                <input type="text" style="min-width:50%;" class="email">
                <input class="submit-email" type="submit" value="Đăng ký" class="submit1">
            </form>
        </div>
        <div class="col-3">
            <h3>Thông tin liên hệ:</h3>
            <br>
            <hr>
            <br>
            <p> <b>Địa chỉ: </b>p302 Số 35 ngõ 521 Cổ Nhuế, Bắc Từ Liêm, Hà Nội,Việt Nam.</p><br>
            <p><b>Số Điện Thoại: </b> 0979788374.</p><br>
            <p><b>Email:</b> Cmmnstprd@gmail.com.</p>

        </div>
    </footer>
</body>

</html>
```
## Meals:
![alt text](./images/screenshot4.png "title")
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/meals.css">
    <script src="./js/main.js"></script>
    <title>Better Meals </title>
</head>

<body>
    <header>
        <img src="./images/logo1.JPG" alt="" style="height: 150px;">
    </header>
    <div class="logo1">
        <img src="./images/logo5.JPG" alt="" style="height: 70px;">
    </div>
    <div class="nav-container">
        <div class="user-container">
            <img class="user-icon icon" src="./images/icon-user.webp" alt="">
            <div class="sign-in">
                <a href="">Sign In</a>
                <a href="">Sign Up</a>
            </div>
        </div>
        <img class="search-icon icon" id="search-icon" src="./images/icon-search.webp" alt="">
        <nav>
            <ul>
                <li><a href="homepage.html">Home</a></li>
                <li><a href="aboutus.html">About us</a></li>
                <li><a href="meals.html">Meals</a></li>
                <li><a href="">Share</a></li>
            </ul>
        </nav>
    </div>
    <div class="content">
        <div class="img-container">
            <div class="row">
                <div class="column">

                    <img src="./images/0b1ab04ee1eb1286f69e9daf4d13b60a.jpg" alt="" >
                    <h3>Công thức làm cơm cuộn ngon dễ làm</h3>

                    <img src="./images/321d3d7bc9b8600f8f858febd1b31eaf.jpg" alt="" >
                    <h3>Nước sốt cực ngon từ những nguyên liệu đơn giản</h3>

                    <img src="./images/6de7c2db94866cff70a572e64730bede.jpg" alt="" >
                    <h3>Món gà nướng chanh mật ong thơm nức mũi</h3>

                    <img src="./images/6eb3ecc4327dd7f0aa7e6a9166c5da46.jpg" alt="">
                    <h3>Ăn đồ chiên như nào cho hợp lí</h3>
                </div>
                <div class="column">

                    <img src="./images/6eb3ecc4327dd7f0aa7e6a9166c5da46.jpg" alt="" >
                    <h3>Ăn đồ chiên như nào cho hợp lí</h3>


                    <img src="./images/7b3ca884ace36473a090c52ef048c4bc.jpg" alt="" >
                    <h3>Bổ sung hoa quả cho bữa ăn</h3>

                    <img src="./images/b513161ae40ee78c62c6ce96eaf963da.jpg" alt="" >
                    <h3>Làm món kem cho gia đình</h3>

                    <img src="./images/a08baabc8c96076bb601715bb97630ed.jpg" alt="" >
                    <h3>Há cảo chuẩn vị nhà hàng</h3>
                </div>
                <div class="column">

                    <img src="./images/bc9af4c2074cd1e679031a593d1e5b8d.jpg" alt="" >
                    <h3>Pancake dâu tây </h3>

                    <img src="./images/6eb3ecc4327dd7f0aa7e6a9166c5da46.jpg" alt="" >
                    <h3>Ăn đồ chiên như nào cho hợp lí</h3>

                    <img src="./images/7b3ca884ace36473a090c52ef048c4bc.jpg" alt="" >
                    <h3>Bổ sung hoa quả cho bữa ăn</h3>
                    <img src="./images/b513161ae40ee78c62c6ce96eaf963da.jpg" alt="" >
                    <h3>Làm món kem cho gia đình</h3>
                </div>
                <div class="column">

                    <img src="./images/0b1ab04ee1eb1286f69e9daf4d13b60a.jpg" alt="" >
                    <h3>Công thức làm cơm cuộn ngon dễ làm</h3>

                    <img src="./images/321d3d7bc9b8600f8f858febd1b31eaf.jpg" alt="" >
                    <h3>Nước sốt cực ngon từ những nguyên liệu đơn giản</h3>

                    <img src="./images/6de7c2db94866cff70a572e64730bede.jpg" alt="" >
                    <h3>Món gà nướng chanh mật ong thơm nức mũi</h3>

                    <img src="./images/6eb3ecc4327dd7f0aa7e6a9166c5da46.jpg" alt="" >
                    <h3>Ăn đồ chiên như nào cho hợp lí</h3>
                </div>
            </div>
        </div>
</body>

</html>
```



