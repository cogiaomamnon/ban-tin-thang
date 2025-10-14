import React from "react";

// Import 3 images from general folder
const image1 = require("../../img/general/z7416912988769_f9ffb9a75c339434bc35dcf8672179fb.jpg");
const image2 = require("../../img/general/z7416912993861_f410ad631c71990eed565f8f0af05808.jpg");
const image3 = require("../../img/general/z7416913000977_61c6a8617e99bb13ad6049fc93fa7589.jpg");

export const Hero = () => {
	return (
		<section className="section-hero">
			<div className="hero">
				<div className="hero-text-box">
					<h1 className="heading-primary">
						Trúc Đào, ươm mầm yêu thương, vững bước tương lai
					</h1>
					<p className="hero-description">
						Trường mầm non Trúc Đào là nơi mỗi em nhỏ được đón nhận bằng tất cả tình yêu thương và sự
						trân trọng. Chúng tôi tin rằng, những năm tháng đầu đời là giai đoạn quan trọng nhất để hình
						thành nhân cách, trí tuệ và cảm xúc của trẻ. Vì thế, Trúc Đào luôn tạo dựng một môi trường
						học tập và vui chơi an toàn, ấm áp như một gia đình thứ hai.
					</p>
					<a href="https://www.facebook.com/truong.trucdao/photos"
					   className="btn btn--full margin-right-sm">Theo dõi nhà trường</a>
					<a href="#how" className="btn btn--outline">Khám phá &darr;</a>
				</div>
				<div className="hero-img-box">
					<div className="hero-img-collage">
						<img
							src={image1}
							alt="Trúc Đào 1"
							className="hero-img hero-img-1"
						/>
						<img
							src={image2}
							alt="Trúc Đào 2"
							className="hero-img hero-img-2"
						/>
						<img
							src={image3}
							alt="Trúc Đào 3"
							className="hero-img hero-img-3"
						/>
					</div>
				</div>
			</div>
		</section>)
}
