import React from "react"
import styled from "styled-components"

const activities = [
	{
		day: "Thứ Hai",
		activity: "Tập thể dục ngoài trời 🏃‍♀️",
		description: "Bé khởi động buổi sáng bằng các bài tập vận động nhẹ, giúp cơ thể dẻo dai và khỏe mạnh."
	},
	{
		day: "Thứ Ba",
		activity: "Học múa và nhảy 🎶",
		description: "Bé được học những động tác múa vui nhộn, giúp phát triển khả năng cảm thụ âm nhạc."
	},
	{
		day: "Thứ Tư",
		activity: "Trồng cây nhỏ 🌱",
		description: "Hoạt động giúp bé hiểu về thiên nhiên và rèn luyện tính kiên nhẫn, chăm sóc cây xanh."
	},
	{
		day: "Thứ Năm",
		activity: "Vẽ tranh sáng tạo 🎨",
		description: "Bé thỏa sức sáng tạo bằng màu sắc và hình khối, phát triển trí tưởng tượng phong phú."
	},
	{
		day: "Thứ Sáu",
		activity: "Trò chơi dân gian 🎯",
		description: "Cùng nhau chơi kéo co, nhảy bao bố, hoặc ném vòng – giúp bé học tinh thần đồng đội và vui vẻ."
	}
]

export default function ExtracurricularActivities() {
	return (
		<Container>
			<Title>🎈 Hoạt động ngoại khóa</Title>
			<List>
				{activities.map((item, index) => (
					<Card key={index}>
						<Day>{item.day}</Day>
						<Activity>{item.activity}</Activity>
						<Description>{item.description}</Description>
					</Card>
				))}
			</List>
			<Note>
				Các hoạt động được thay đổi hàng tuần để bé luôn cảm thấy hứng thú và năng động 💕
			</Note>
		</Container>
	)
}

const Container = styled.div`
  max-width: 500px;
  margin: 40px auto;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  padding: 24px;
  border: 1px solid #f3f3f3;
`

const Title = styled.h2`
  text-align: center;
  color: #2a9d8f;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 24px;
`

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const Card = styled.div`
  background: #f9fdfb;
  border: 1px solid #e0f2ef;
  border-radius: 16px;
  padding: 16px;
  transition: all 0.2s ease;
  &:hover {
    background: #f1fbf7;
    transform: translateY(-2px);
  }
`

const Day = styled.h3`
  color: #264653;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 4px;
`

const Activity = styled.p`
    color: #e76f51;
    font-weight: 600;
    font-size: 15px;
    margin: 4px 0;
`

const Description = styled.p`
  color: #555;
  font-size: 14px;
  line-height: 1.5;
`

const Note = styled.p`
  text-align: center;
  font-size: 13px;
  color: #aaa;
  margin-top: 24px;
`
