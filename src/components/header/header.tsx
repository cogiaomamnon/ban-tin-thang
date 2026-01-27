import {Header, Logo} from "../../App.styled";
import React, {useState} from "react";
import {ImageGalleryModal} from "../imageGalleryModal/ImageGalleryModal";
import {LichHocModal} from "../lichHocModal/LichHocModal";
import {ThucDonModal} from "../thucDonModal/ThucDonModal";
import styled from "styled-components";

const LogoContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;
`;

const NotificationButton = styled.button`
	background: transparent;
	border: none;
	cursor: pointer;
	position: relative;
	padding: 0.8rem;
	border-radius: 50%;
	transition: all 0.3s;
	display: flex;
	align-items: center;
	justify-content: center;
	
	&:hover {
		background-color: rgba(230, 126, 34, 0.1);
	}
	
	svg {
		width: 2.4rem;
		height: 2.4rem;
		fill: #333;
		stroke: #333;
		stroke-width: 2;
	}
`;

const NotificationBadge = styled.span`
	position: absolute;
	top: 0.4rem;
	right: 0.4rem;
	background-color: #e74c3c;
	color: white;
	font-size: 1rem;
	font-weight: 600;
	padding: 0.2rem 0.5rem;
	border-radius: 1rem;
	min-width: 1.8rem;
	text-align: center;
`;

const NotificationButtonContainer = styled.div`
	position: relative;
`;

const NotificationModal = styled.div<{ isOpen: boolean }>`
	display: ${props => props.isOpen ? 'block' : 'none'};
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 10001;
`;

const NotificationOverlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: transparent;
`;

const NotificationContent = styled.div`
	position: absolute;
	top: 7rem;
	left: 2rem;
	background: white;
	border-radius: 1.2rem;
	padding: 2rem;
	width: 45rem;
	max-height: 60vh;
	overflow-y: scroll;
	box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.2);
	animation: slideDown 0.3s ease;
	
	/* Custom scrollbar styling */
	&::-webkit-scrollbar {
		width: 8px;
	}
	
	&::-webkit-scrollbar-track {
		background: #f1f1f1;
		border-radius: 10px;
	}
	
	&::-webkit-scrollbar-thumb {
		background: #e67e22;
		border-radius: 10px;
		
		&:hover {
			background: #d35400;
		}
	}
	
	@keyframes slideDown {
		from {
			opacity: 0;
			transform: translateY(-1rem);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	
	@media (max-width: 768px) {
		left: 1rem;
		right: 1rem;
		width: auto;
		max-height: 50vh;
	}
`;

const CloseButton = styled.button`
	position: absolute;
	top: 1rem;
	right: 1rem;
	background: transparent;
	color: #999;
	border: none;
	border-radius: 50%;
	width: 3rem;
	height: 3rem;
	font-size: 2.4rem;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.3s;
	line-height: 1;
	
	&:hover {
		background: #f0f0f0;
		color: #333;
	}
`;

const NotificationTitle = styled.h2`
	font-size: 2rem;
	color: #e67e22;
	margin-bottom: 1.5rem;
	padding-right: 3rem;
	font-weight: 600;
`;

const NotificationList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const NotificationItem = styled.div`
	padding: 1.2rem;
	border-left: 3px solid #e67e22;
	background-color: #e3f2fd;
	border-radius: 0.6rem;
	transition: all 0.3s;
	cursor: pointer;
	
	&:hover {
		background-color: #bbdefb;
		border-left-width: 4px;
	}
`;

const NotificationItemTitle = styled.h3`
	font-size: 1.5rem;
	color: #333;
	margin-bottom: 0.5rem;
	font-weight: 600;
`;

const NotificationItemText = styled.p`
	font-size: 1.3rem;
	color: #555;
	line-height: 1.5;
	margin-bottom: 0.4rem;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
`;

const NotificationItemDate = styled.span`
	font-size: 1.1rem;
	color: #888;
	font-style: italic;
`;

const NotificationDetailModal = styled.div<{ isOpen: boolean }>`
	display: ${props => props.isOpen ? 'flex' : 'none'};
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.7);
	z-index: 10002;
	justify-content: center;
	align-items: center;
	padding: 2rem;
`;

const NotificationDetailContent = styled.div`
	background: white;
	border-radius: 1.6rem;
	padding: 3rem;
	max-width: 70rem;
	width: 100%;
	max-height: 80vh;
	overflow-y: auto;
	position: relative;
	box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.3);
	animation: slideUp 0.4s ease;
	
	@keyframes slideUp {
		from {
			opacity: 0;
			transform: translateY(3rem);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	
	&::-webkit-scrollbar {
		width: 8px;
	}
	
	&::-webkit-scrollbar-track {
		background: #f1f1f1;
		border-radius: 10px;
	}
	
	&::-webkit-scrollbar-thumb {
		background: #e67e22;
		border-radius: 10px;
	}
`;

const DetailCloseButton = styled.button`
	position: absolute;
	top: 1.5rem;
	right: 1.5rem;
	background: #e74c3c;
	color: white;
	border: none;
	border-radius: 50%;
	width: 4rem;
	height: 4rem;
	font-size: 2.4rem;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.3s;
	
	&:hover {
		background: #c0392b;
		transform: scale(1.1);
	}
`;

const DetailTitle = styled.h2`
	font-size: 2.8rem;
	color: #e67e22;
	margin-bottom: 1.5rem;
	padding-right: 5rem;
	font-weight: 700;
`;

const DetailDate = styled.div`
	font-size: 1.4rem;
	color: #888;
	margin-bottom: 2rem;
	padding: 0.8rem 1.2rem;
	background: #f8f9fa;
	border-radius: 0.8rem;
	width: fit-content;
`;

const DetailText = styled.div`
	font-size: 1.6rem;
	color: #333;
	line-height: 1.8;
	margin-bottom: 2rem;
	white-space: pre-line;
`;

const DetailSection = styled.div`
	margin-bottom: 2rem;
	padding: 2rem;
	background: linear-gradient(135deg, #e3f2fd 0%, #f5f5f5 100%);
	border-radius: 1rem;
	border-left: 4px solid #e67e22;
`;

const DetailSectionTitle = styled.h3`
	font-size: 2rem;
	color: #e67e22;
	margin-bottom: 1rem;
	font-weight: 600;
`;

const DetailSectionText = styled.p`
	font-size: 1.5rem;
	color: #555;
	line-height: 1.7;
	white-space: pre-line;
`;

export const HeaderSection = () => {
	const [isGocPhuHuynhModalOpen, setIsGocPhuHuynhModalOpen] = useState(false);
	const [isLichHocModalOpen, setIsLichHocModalOpen] = useState(false);
	const [isThucDonModalOpen, setIsThucDonModalOpen] = useState(false);
	const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);
	const [selectedNotification, setSelectedNotification] = useState<number | null>(null);

	const handleGocPhuHuynhClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		setIsGocPhuHuynhModalOpen(true);
	};

	const handleLichHocClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		setIsLichHocModalOpen(true);
	};

	const handleThucDonClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		setIsThucDonModalOpen(true);
	};

	const handleNotificationClick = () => {
		setIsNotificationModalOpen(true);
	};

	const handleNotificationClose = () => {
		setIsNotificationModalOpen(false);
	};

	const handleNotificationItemClick = (id: number) => {
		setSelectedNotification(id);
	};

	const handleDetailClose = () => {
		setSelectedNotification(null);
	};

	const notificationDetails: { [key: number]: { title: string; date: string; content: string; sections: { title: string; text: string }[] } } = {
		1: {
			title: "Thông báo nghỉ Tết Nguyên Đán 2026",
			date: "20/01/2026",
			content: "Kính gửi Quý phụ huynh,\n\nTrường Mầm Non Trúc Đào trân trọng thông báo lịch nghỉ Tết Nguyên Đán Bính Ngọ 2026 như sau:",
			sections: [
				{ title: "📅 Thời gian nghỉ", text: "Từ ngày 26/01/2026 đến hết ngày 02/02/2026. Trường mở cửa trở lại vào ngày 03/02/2026." },
				{ title: "📝 Lưu ý quan trọng", text: "Phụ huynh vui lòng hoàn tất việc đóng học phí trước ngày 25/01/2026. Đồ dùng cá nhân của bé cần mang về nhà trong ngày 25/01/2026." },
				{ title: "🎊 Lời chúc", text: "Nhà trường chúc Quý phụ huynh và các bé một năm mới An Khang - Thịnh Vượng!" }
			]
		},
		2: {
			title: "Chương trình hoạt động ngoại khóa tháng 2",
			date: "18/01/2026",
			content: "Kính gửi Quý phụ huynh,\n\nNhà trường tổ chức chương trình hoạt động ngoại khóa nhằm giúp các bé phát triển toàn diện.",
			sections: [
				{ title: "🏞️ Địa điểm và thời gian", text: "Địa điểm: Công viên Văn hóa, Quận 1\nThời gian: 08:00 - 15:00, ngày 15/02/2026" },
				{ title: "🎯 Nội dung hoạt động", text: "- Tham quan và tìm hiểu về thiên nhiên\n- Các trò chơi vận động ngoài trời\n- Picnic cùng bạn bè và giáo viên" },
				{ title: "💰 Chi phí", text: "Chi phí: 150.000 VNĐ/bé\nHạn đăng ký: Trước 17:00 ngày 10/02/2026" }
			]
		},
		3: {
			title: "Thông báo về thực đơn dinh dưỡng",
			date: "15/01/2026",
			content: "Kính gửi Quý phụ huynh,\n\nThực đơn tuần này đã được cập nhật với các món ăn bổ dưỡng, đảm bảo đủ chất dinh dưỡng cho các bé.",
			sections: [
				{ title: "🍱 Nguyên tắc xây dựng thực đơn", text: "- Đa dạng các nhóm thực phẩm\n- Cân đối dinh dưỡng theo độ tuổi\n- Thực phẩm tươi sạch" },
				{ title: "🔍 Xem chi tiết", text: "Phụ huynh có thể xem thực đơn chi tiết tại mục 'Lịch Học' trên website." }
			]
		},
		4: {
			title: "Lịch họp phụ huynh đầu năm 2026",
			date: "12/01/2026",
			content: "Kính gửi Quý phụ huynh,\n\nTrường Mầm Non Trúc Đào kính mời Quý phụ huynh tham dự buổi họp đầu năm 2026.",
			sections: [
				{ title: "⏰ Thời gian và địa điểm", text: "Thời gian: 18:00 - 20:00, ngày 10/02/2026\nĐịa điểm: Hội trường nhà trường" },
				{ title: "📋 Nội dung cuộc họp", text: "- Tổng kết hoạt động năm 2025\n- Kế hoạch giáo dục năm 2026\n- Giải đáp thắc mắc của phụ huynh" }
			]
		},
		5: {
			title: "Chương trình khám sức khỏe định kỳ",
			date: "10/01/2026",
			content: "Kính gửi Quý phụ huynh,\n\nNhà trường phối hợp với Bệnh viện Nhi Đồng tổ chức khám sức khỏe định kỳ cho các bé.",
			sections: [
				{ title: "🏥 Thông tin chung", text: "Thời gian: 08:00 - 15:00, ngày 05/02/2026\nĐịa điểm: Phòng Y tế trường" },
				{ title: "🔬 Nội dung khám", text: "- Khám tổng quát\n- Đo chiều cao, cân nặng\n- Khám răng miệng, mắt, tai mũi họng" },
				{ title: "💵 Chi phí", text: "Nhà trường tài trợ 100% chi phí. Phụ huynh không phải đóng thêm phí." }
			]
		},
		6: {
			title: "Thông báo về học phí tháng 2/2026",
			date: "08/01/2026",
			content: "Kính gửi Quý phụ huynh,\n\nTrường Mầm Non Trúc Đào thông báo về việc đóng học phí tháng 2/2026.",
			sections: [
				{ title: "💰 Mức học phí", text: "Học phí tháng 2/2026: 2.500.000 VNĐ/bé\nBao gồm: Học phí, tiền ăn, hoạt động ngoại khóa" },
				{ title: "⏰ Thời hạn đóng", text: "Hạn chót: 17:00, ngày 31/01/2026" },
				{ title: "🏦 Hình thức thanh toán", text: "1. Tiền mặt tại văn phòng\n2. Chuyển khoản: Vietcombank - 0123456789 - Trường MN Trúc Đào" }
			]
		},
		7: {
			title: "Chương trình học bơi cho trẻ",
			date: "05/01/2026",
			content: "Kính gửi Quý phụ huynh,\n\nTrường triển khai lớp dạy bơi cho các bé từ 4-5 tuổi.",
			sections: [
				{ title: "🏊 Thông tin khóa học", text: "Thời gian: Bắt đầu từ 01/03/2026\nLịch học: Thứ 3, 5, 7 (15:30-16:30)\nThời lượng: 12 buổi" },
				{ title: "💵 Học phí", text: "Học phí: 1.200.000 VNĐ/khóa\nĐăng ký trước 15/02/2026: Ưu đãi 10%" },
				{ title: "📝 Đăng ký", text: "Điền phiếu đăng ký tại văn phòng\nSố lượng: Giới hạn 20 bé" }
			]
		},
		8: {
			title: "Tổng kết học kỳ I năm học 2025-2026",
			date: "03/01/2026",
			content: "Kính gửi Quý phụ huynh,\n\nNhà trường tổ chức buổi lễ tổng kết học kỳ I và trao giải cho các bé xuất sắc.",
			sections: [
				{ title: "🎭 Chương trình", text: "Thời gian: 08:00 - 11:00, ngày 20/01/2026\nĐịa điểm: Sân trường\n- Phát biểu của Ban Giám hiệu\n- Văn nghệ của các bé\n- Trao giải và chứng nhận" },
				{ title: "🏆 Danh hiệu", text: "- Bé ngoan nhất\n- Bé tiến bộ nhất\n- Bé sáng tạo nhất" }
			]
		},
		9: {
			title: "Thông báo tuyển sinh năm học 2026-2027",
			date: "02/01/2026",
			content: "Kính gửi Quý phụ huynh,\n\nTrường Mầm Non Trúc Đào chính thức nhận hồ sơ tuyển sinh năm học 2026-2027.",
			sections: [
				{ title: "👶 Đối tượng tuyển sinh", text: "- Nhà trẻ (6-36 tháng tuổi)\n- Mẫu giáo nhỏ (3 tuổi)\n- Mẫu giáo vừa (4 tuổi)\n- Mẫu giáo lớn (5 tuổi)" },
				{ title: "📅 Thời gian tuyển sinh", text: "Nhận hồ sơ: Từ 01/03/2026\nThông báo kết quả: 15/05/2026" },
				{ title: "📞 Liên hệ tư vấn", text: "Hotline: 0123 456 789\nEmail: tuyensinh@trucdao.edu.vn" }
			]
		},
		10: {
			title: "Lễ khai giảng năm học mới",
			date: "28/12/2025",
			content: "Kính gửi Quý phụ huynh,\n\nLễ khai giảng năm học 2025-2026 đã diễn ra thành công tốt đẹp.",
			sections: [
				{ title: "🎊 Những con số ấn tượng", text: "- 450 học sinh đăng ký nhập học\n- 95% phụ huynh tham dự\n- 25 giáo viên tận tâm" },
				{ title: "💝 Lời cảm ơn", text: "Ban Giám hiệu xin chân thành cảm ơn sự tin tưởng của Quý phụ huynh. Chúng tôi cam kết mang đến môi trường giáo dục tốt nhất cho các bé!" }
			]
		}
	};

	const notifications = [
		{
			id: 1,
			title: "Thông báo nghỉ Tết Nguyên Đán 2026",
			text: "Trường Mầm Non Trúc Đào thông báo lịch nghỉ Tết Nguyên Đán từ ngày 26/01/2026 đến hết 02/02/2026. Trường mở cửa trở lại vào ngày 03/02/2026.",
			date: "20/01/2026"
		},
		{
			id: 2,
			title: "Chương trình hoạt động ngoại khóa tháng 2",
			text: "Nhà trường tổ chức hoạt động ngoại khóa tại Công viên Văn hóa vào ngày 15/02/2026. Phụ huynh vui lòng đăng ký cho bé tham gia trước ngày 10/02/2026.",
			date: "18/01/2026"
		},
		{
			id: 3,
			title: "Thông báo về thực đơn dinh dưỡng",
			text: "Thực đơn tuần này đã được cập nhật với các món ăn bổ dưỡng, đa dạng giúp bé phát triển toàn diện. Phụ huynh có thể xem chi tiết tại mục Lịch Học.",
			date: "15/01/2026"
		},
		{
			id: 4,
			title: "Lịch họp phụ huynh đầu năm 2026",
			text: "Trường tổ chức buổi họp phụ huynh đầu năm vào lúc 18h00 ngày 10/02/2026 tại hội trường nhà trường. Đề nghị phụ huynh sắp xếp thời gian tham dự.",
			date: "12/01/2026"
		},
		{
			id: 5,
			title: "Chương trình khám sức khỏe định kỳ",
			text: "Nhà trường phối hợp với Bệnh viện Nhi Đồng tổ chức khám sức khỏe định kỳ cho các bé vào ngày 05/02/2026. Không thu thêm phí.",
			date: "10/01/2026"
		},
		{
			id: 6,
			title: "Thông báo về học phí tháng 2/2026",
			text: "Phụ huynh vui lòng hoàn tất việc đóng học phí tháng 2/2026 trước ngày 31/01/2026. Mọi thắc mắc xin liên hệ văn phòng nhà trường.",
			date: "08/01/2026"
		},
		{
			id: 7,
			title: "Chương trình học bơi cho trẻ",
			text: "Trường mở lớp dạy bơi cho các bé từ 4-5 tuổi bắt đầu từ tháng 3/2026. Đăng ký trước ngày 15/02/2026 để được ưu đãi 10%.",
			date: "05/01/2026"
		},
		{
			id: 8,
			title: "Tổng kết học kỳ I năm học 2025-2026",
			text: "Buổi tổng kết học kỳ I và trao giải cho các bé xuất sắc sẽ diễn ra vào ngày 20/01/2026. Kính mời quý phụ huynh tham dự.",
			date: "03/01/2026"
		},
		{
			id: 9,
			title: "Thông báo tuyển sinh năm học 2026-2027",
			text: "Trường Mầm Non Trúc Đào chính thức nhận hồ sơ đăng ký tuyển sinh năm học 2026-2027 từ ngày 01/03/2026. Liên hệ hotline: 0123456789.",
			date: "02/01/2026"
		},
		{
			id: 10,
			title: "Lễ khai giảng năm học mới",
			text: "Lễ khai giảng năm học 2025-2026 đã diễn ra thành công tốt đẹp với sự tham gia đông đảo của phụ huynh và các bé. Xin cảm ơn sự hỗ trợ của quý phụ huynh.",
			date: "28/12/2025"
		}
	];

	return (
		<>
			<Header className="header">
				<LogoContainer>
					<NotificationButtonContainer>
						<NotificationButton onClick={handleNotificationClick} aria-label="Thông báo">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
								<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" strokeLinecap="round" strokeLinejoin="round"/>
								<path d="M13.73 21a2 2 0 0 1-3.46 0" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
							<NotificationBadge>10</NotificationBadge>
						</NotificationButton>
					</NotificationButtonContainer>
					<Logo>Trúc Đào</Logo>
				</LogoContainer>
				<nav className="main-nav">
					<ul className="main-nav-list">
						<li className="main-nav-item">
							<a target="_blank" rel="noreferrer" href="https://www.facebook.com/truong.trucdao"
							   className="main-nav-link">Nhà Trường</a>
						</li>
						<li className="main-nav-item">
							<a href="#hoatdong" className="main-nav-link">Hoạt Động</a>
						</li>
						<li className="main-nav-item">
							<a href="#" onClick={handleGocPhuHuynhClick} className="main-nav-link">Góc Phụ Huynh</a>
						</li>
						<li className="main-nav-item">
							<a href="#" onClick={handleLichHocClick} className="main-nav-link">Lịch Học</a>
						</li>
						<li className="main-nav-item">
							<a href="#" onClick={handleThucDonClick} className="main-nav-link">Thực Đơn</a>
						</li>
						<li className="main-nav-item">
							<a href="#chatbot" className="main-nav-link">Chat bot</a>
						</li>
						<li className="main-nav-item">
							<a target="_blank" rel="noreferrer"
							   href="https://www.facebook.com/profile.php?id=100090833588628"
							   className="main-nav-link nav-cta"
							>Lớp Học</a>
						</li>
					</ul>
				</nav>
			</Header>

			<NotificationModal isOpen={isNotificationModalOpen}>
				<NotificationOverlay onClick={handleNotificationClose} />
				<NotificationContent onClick={(e) => e.stopPropagation()}>
					<CloseButton onClick={handleNotificationClose}>×</CloseButton>
					<NotificationTitle>🔔 Thông Báo Nhà Trường</NotificationTitle>
					<NotificationList>
						{notifications.map(notification => (
							<NotificationItem key={notification.id} onClick={() => handleNotificationItemClick(notification.id)}>
								<NotificationItemTitle>{notification.title}</NotificationItemTitle>
								<NotificationItemText>{notification.text}</NotificationItemText>
								<NotificationItemDate>📅 {notification.date}</NotificationItemDate>
							</NotificationItem>
						))}
					</NotificationList>
				</NotificationContent>
			</NotificationModal>

			<ImageGalleryModal isOpen={isGocPhuHuynhModalOpen} onClose={() => setIsGocPhuHuynhModalOpen(false)}/>
			<LichHocModal isOpen={isLichHocModalOpen} onClose={() => setIsLichHocModalOpen(false)}/>
			<ThucDonModal isOpen={isThucDonModalOpen} onClose={() => setIsThucDonModalOpen(false)}/>

			{selectedNotification && notificationDetails[selectedNotification] && (
				<NotificationDetailModal isOpen={true}>
					<NotificationDetailContent onClick={(e) => e.stopPropagation()}>
						<DetailCloseButton onClick={handleDetailClose}>×</DetailCloseButton>
						<DetailTitle>{notificationDetails[selectedNotification].title}</DetailTitle>
						<DetailDate>📅 {notificationDetails[selectedNotification].date}</DetailDate>
						<DetailText>{notificationDetails[selectedNotification].content}</DetailText>
						{notificationDetails[selectedNotification].sections.map((section: { title: string; text: string }, index: number) => (
							<DetailSection key={index}>
								<DetailSectionTitle>{section.title}</DetailSectionTitle>
								<DetailSectionText>{section.text}</DetailSectionText>
							</DetailSection>
						))}
					</NotificationDetailContent>
				</NotificationDetailModal>
			)}
		</>
	)
}
