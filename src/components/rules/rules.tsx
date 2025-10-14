import ngoaikhoaIMG from "../../img/khoanhKhac/z7463974605883_7967b53f6766facee785bc06370c644c.jpg";
import ngoaikhoa1IMG from "../../img/khoanhKhac/z7463974591846_462e9d6c405fb422528a484485247fa7.jpg";
import ngoaikhoa2IMG from "../../img/khoanhKhac/z7463975168769_1574cc29ec4d61a374d8de66d3b973d2.jpg";

export const Rules = () => {
	return (
		<section className="section-how" id="hoatdong">
			<div className="container">
				<span className="subheading">Trường mầm non trúc đào</span>
				<h2 className="heading-secondary">
					Để bé được phát triển một cách toàn diện nhất
				</h2>
			</div>
			<div className="container grid grid--2-cols grid--center-v">
				<div className="step-text-box">
					<p className="step-number">01</p>
					<h3 className="heading-tertiary">
						Bé được học tập một cách bài bản, khoa học.
					</h3>
					<p className="step-description">
						Bé không chỉ được học những kiến thức cơ bản phù hợp với lứa tuổi, mà còn được rèn luyện tư duy
						logic, khả năng quan sát, phân tích và giải quyết vấn đề. Các hoạt động học tập được thiết kế
						đan xen giữa lý thuyết và thực hành, giúp bé vừa hiểu sâu kiến thức, vừa biết cách áp dụng vào
						thực tế.

						Ngoài ra, môi trường học tập của bé còn được tổ chức theo hướng khuyến khích khám phá, sáng tạo
						và tự tin thể hiện bản thân, giúp bé phát triển toàn diện cả về trí tuệ, cảm xúc và kỹ năng xã
						hội.
					</p>
				</div>
				<div className="step-img-box">
					<img
						src={ngoaikhoa1IMG}
						alt="iPhone app preferences selection screen"
						className="step-img"
					/>
				</div>

				<div className="step-img-box">
					<img
						src={ngoaikhoaIMG}
						alt="iPhone app approving plan"
						className="step-img"
					/>
				</div>
				<div className="step-text-box">
					<p className="step-number">02</p>
					<h3 className="heading-tertiary">
						Tham gia các hoạt động vui chơi, ngoại khóa
					</h3>
					<p className="step-description">
						Bé được tham gia các hoạt động vui chơi và ngoại khóa đa dạng, giúp việc học không chỉ gói gọn
						trong sách vở mà còn mở rộng ra thế giới xung quanh.

						Thông qua các hoạt động này, bé có cơ hội rèn luyện thể chất, phát triển kỹ năng giao tiếp, hợp
						tác và tinh thần đồng đội. Những trò chơi mang tính sáng tạo, các buổi tham quan, dã ngoại hay
						hoạt động nhóm đều giúp bé học cách quan sát, khám phá và tự tin thể hiện bản thân trong nhiều
						tình huống khác nhau.
					</p>
				</div>


				<div className="step-text-box">
					<p className="step-number">03</p>
					<h3 className="heading-tertiary">
						Thưởng thức bữa ăn thơm ngon, dinh dưỡng
					</h3>
					<p className="step-description">
						Bé được thưởng thức những bữa ăn thơm ngon, đầy đủ dinh dưỡng, được chuẩn bị kỹ lưỡng để đảm bảo
						cả hương vị hấp dẫn lẫn giá trị dinh dưỡng cân bằng.

						Các bữa ăn được xây dựng theo thực đơn khoa học, đa dạng thực phẩm, giúp bé hấp thu đầy đủ các
						nhóm chất cần thiết như chất đạm, tinh bột, chất béo, vitamin và khoáng chất. Thức ăn luôn được
						chế biến hợp khẩu vị trẻ nhỏ, trình bày đẹp mắt, kích thích bé ăn ngon miệng và hình thành thói
						quen ăn uống lành mạnh.
					</p>
				</div>
				<div className="step-img-box">
					<img
						src={ngoaikhoa2IMG}
						alt="iPhone delivery screen"
						className="step-img"
					/>
				</div>
			</div>
		</section>
	)
}
