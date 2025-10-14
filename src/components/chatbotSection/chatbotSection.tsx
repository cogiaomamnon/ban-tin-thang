import {MyChatBot} from "../../containers/chatbot/chatbot";
import styled from "styled-components";

const SectionChatBot = styled.section`
	padding: 15rem 0;
	background-color: #f9f9f9;
`

export const ChatbotSection = () => {
	return (
		<SectionChatBot  id="chatbot">
			<div className="container">
				<span className="subheading">Chat Bot</span>
				<h2 className="heading-secondary">
					Gặp gỡ Chat Bot của chúng tôi để được tư vấn
				</h2>
			</div>

			<div className="container margin-bottom-md">
				<div className="pricing-plan">
					<MyChatBot />
				</div>
			</div>

			<div className="container">
				<aside className="plan-details">
					Bạn có thể hỏi chat bot bất kể điều gì về truờng mầm non Trúc Đào, từ
					chương trình học, hoạt động ngoại khóa, đến quy trình nhập học và các dịch vụ hỗ trợ phụ huynh.
					Chat bot của chúng tôi được thiết kế để cung cấp thông tin nhanh chóng và chính xác, giúp bạn
					hiểu rõ hơn về những gì chúng tôi mang lại cho con em bạn. Hãy thử trò chuyện với chat bot ngay
					hôm nay để trải nghiệm sự tiện lợi và hiệu quả trong việc tìm kiếm thông tin về trường mầm non
					Trúc Đào!
				</aside>
			</div>

		</SectionChatBot>
	)
}
