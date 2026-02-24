import React from "react";
import cotramIMG from "../../img/cotram.png";
import cothuIMG from "../../img/cothu.jpg";
import cohiepIMG from "../../img/cohiep.png";
import kk1 from "../../img/khoanhKhac/z7463973563506_046818a56b1abbc2d35e55c316c3d300.jpg";
import kk2 from "../../img/khoanhKhac/z7463973568857_dff66112f6d619b2b5e45fd4989fbe3f.jpg";
import kk3 from "../../img/khoanhKhac/z7463973572703_a4775a5232abd665816dae9ec5e21611.jpg";
import kk4 from "../../img/khoanhKhac/z7463973578284_cbe87181e19e0358e3323f3d50030f3e.jpg";
import kk5 from "../../img/khoanhKhac/z7463973582708_eff375a33dbe432d6e8d1e8914d8b703.jpg";
import kk6 from "../../img/khoanhKhac/z7463973589285_d07c705ef62a02687c5ef062aeb8c27f.jpg";
import kk7 from "../../img/khoanhKhac/z7463973592616_4e40a6eabf370ba6e320470564613dfa.jpg";
import kk8 from "../../img/khoanhKhac/z7463973598703_2fb99310f37d0918785d863e75ade11a.jpg";
import kk9 from "../../img/khoanhKhac/z7463973603382_4ccde0635fe2b1aa58386888a040712b.jpg";
import kk10 from "../../img/khoanhKhac/z7463973609012_b8692fc7de0a6d39d4efb9bfa2e575c3.jpg";
import kk11 from "../../img/khoanhKhac/z7463973612562_6e53ee463e016a55d12133f35b040ed1.jpg";
import kk12 from "../../img/khoanhKhac/z7463973619398_a09b24cc725247f7353bf2d586c6d131.jpg";
import kk13 from "../../img/khoanhKhac/z7463973623637_f3d9d35149fc8aa56ed7ff462ce7ca51.jpg";
import kk14 from "../../img/khoanhKhac/z7463973627981_65af1915caffe29cc9567b7e08becbc1.jpg";
import kk15 from "../../img/khoanhKhac/z7463973634101_cf7460a62926decf26910fc578b8cfb0.jpg";
import kk16 from "../../img/khoanhKhac/z7463973640283_b2982c8a087baa61bbf981647cb36c62.jpg";
import kk17 from "../../img/khoanhKhac/z7463974591846_462e9d6c405fb422528a484485247fa7.jpg";
import kk18 from "../../img/khoanhKhac/z7463974605883_7967b53f6766facee785bc06370c644c.jpg";
import kk19 from "../../img/khoanhKhac/z7463975168769_1574cc29ec4d61a374d8de66d3b973d2.jpg";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import styled from "styled-components";

const StyledGallery = styled.section`
    background-color: #fdf2e9;
`

export const Activities = () => {
	return (
		<>
			<section className="section-testimonials" id="khoanhkhac">
				<div className="testimonials-container">
					<span className="subheading">Hình ảnh hoạt động của bé</span>
					<h2 className="heading-secondary">
						Khám phá khoảng khắc của bé qua từng tấm hình
					</h2>
					<div className="testimonials">
						<figure className="testimonial">
							<img
								className="testimonial-img"
								src={cotramIMG}
								alt="Dave Bryson"
							/>
							<blockquote className="testimonial-text">
								Kính gửi quý phụ huynh và các con thân yêu,

								Chào mừng các bé đến với lớp học thân thương của cô! Năm học mới bắt đầu, cô rất vui khi
								được đồng hành cùng các con trong hành trình khám phá tri thức đầu đời. Ở đây, mỗi ngày
								đến
								lớp sẽ là một ngày vui – nơi các con được học tập, vui chơi và phát triển toàn diện
								trong
								tình yêu thương và sự quan tâm của cô.

								Cô mong rằng, cùng với sự phối hợp của quý phụ huynh, chúng ta sẽ tạo nên một môi trường
								học
								tập hạnh phúc, nơi mỗi bé đều được tỏa sáng theo cách riêng của mình.
							</blockquote>
							<p className="testimonial-name">&mdash; Cô Bích Trâm</p>
						</figure>

						<figure className="testimonial">
							<img
								className="testimonial-img"
								src={cothuIMG}
								alt=" Ben Hadley"
							/>
							<blockquote className="testimonial-text">
								Xin chào các con yêu quý và ba mẹ thân mến,

								Cô rất hạnh phúc khi được chào đón các con đến với lớp học nhỏ đầy ắp tiếng cười này. Ở
								đây,
								các con sẽ được chơi, được học, được làm điều mình thích và cùng nhau trưởng thành mỗi
								ngày.

								Cô tin rằng, với tình yêu thương và sự quan tâm của cả cô và bố mẹ, các con sẽ có một
								năm
								học thật vui, thật nhiều kỷ niệm đẹp!
							</blockquote>
							<p className="testimonial-name">&mdash; Cô Thu</p>
						</figure>
					</div>
				</div>
				<div className="gallery">
					<figure className="gallery-item">
						<img src={kk1} alt="gallery"/>
					</figure>
					{/*<figure className="gallery-item">*/}
					{/*	<img src={kk2} alt="gallery"/>*/}
					{/*</figure>*/}
					<figure className="gallery-item">
						<img src={kk3} alt="gallery"/>
					</figure>
					<figure className="gallery-item">
						<img src={kk4} alt="gallery"/>
					</figure>
					<figure className="gallery-item">
						<img src={kk5} alt="gallery"/>
					</figure>
					<figure className="gallery-item">
						<img src={kk6} alt="gallery"/>
					</figure>
					<figure className="gallery-item">
						<img src={kk7} alt="gallery"/>
					</figure>
					<figure className="gallery-item">
						<img src={kk8} alt="gallery"/>
					</figure>
					<figure className="gallery-item">
						<img src={kk9} alt="gallery"/>
					</figure>
					<figure className="gallery-item">
						<img src={kk10} alt="gallery"/>
					</figure>
					<figure className="gallery-item">
						<img src={kk11} alt="gallery"/>
					</figure>
					<figure className="gallery-item">
						<img src={kk12} alt="gallery"/>
					</figure>
					<figure className="gallery-item">
						<img src={kk13} alt="gallery"/>
					</figure>
					<figure className="gallery-item">
						<img src={kk14} alt="gallery"/>
					</figure>
					<figure className="gallery-item">
						<img src={kk15} alt="gallery"/>
					</figure>
					<figure className="gallery-item">
						<img src={kk16} alt="gallery"/>
					</figure>
					<figure className="gallery-item">
						<img src={kk17} alt="gallery"/>
					</figure>
					<figure className="gallery-item">
						<img src={kk18} alt="gallery"/>
					</figure>
					<figure className="gallery-item">
						<img src={kk19} alt="gallery"/>
					</figure>
				</div>


			</section>
			<StyledGallery>
				<ImageGallery items={[
					{original: kk1, thumbnail: kk1},
					{original: kk2, thumbnail: kk2},
					{original: kk3, thumbnail: kk3},
					{original: kk4, thumbnail: kk4},
					{original: kk5, thumbnail: kk5},
					{original: kk6, thumbnail: kk6},
					{original: kk7, thumbnail: kk7},
					{original: kk8, thumbnail: kk8},
					{original: kk9, thumbnail: kk9},
					{original: kk10, thumbnail: kk10},
					{original: kk11, thumbnail: kk11},
					{original: kk12, thumbnail: kk12},
					{original: kk13, thumbnail: kk13},
					{original: kk14, thumbnail: kk14},
					{original: kk15, thumbnail: kk15},
					{original: kk16, thumbnail: kk16},
					{original: kk17, thumbnail: kk17},
					{original: kk18, thumbnail: kk18},
					{original: kk19, thumbnail: kk19}]}/>
			</StyledGallery>
		</>

	)
}
