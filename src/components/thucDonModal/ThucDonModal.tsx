import React, { useState } from "react";
import styled from "styled-components";

// @ts-ignore
import tuan1Img from "../../img/thucDon/tuan1.png";
// @ts-ignore
import tuan2Img from "../../img/thucDon/tuan2.png";
// @ts-ignore
import tuan3Img from "../../img/thucDon/tuan3.png";
// @ts-ignore
import tuan4Img from "../../img/thucDon/tuan4.png";

interface ThucDonModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const ModalOverlay = styled.div<{ isOpen: boolean }>`
	display: ${props => props.isOpen ? 'flex' : 'none'};
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.95);
	z-index: 10000;
	justify-content: center;
	align-items: center;
	padding: 1rem;
`;

const ModalContent = styled.div`
	background: white;
	border-radius: 1rem;
	padding: 2rem;
	width: 95vw;
	height: 95vh;
	max-width: 95vw;
	max-height: 95vh;
	position: relative;
	display: flex;
	flex-direction: column;
	overflow: hidden;
`;

const CloseButton = styled.button`
	position: absolute;
	top: 1.5rem;
	right: 1.5rem;
	background: #ef4444;
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
	z-index: 10;
	
	&:hover {
		background: #dc2626;
		transform: scale(1.1);
	}
`;

const ModalTitle = styled.h2`
	font-size: 3rem;
	margin-bottom: 1rem;
	color: #e67e22;
	text-align: center;
	flex-shrink: 0;
`;

const TabContainer = styled.div`
	display: flex;
	justify-content: center;
	gap: 1rem;
	margin-bottom: 1.5rem;
	flex-wrap: wrap;
`;

const TabButton = styled.button<{ active: boolean }>`
	padding: 1rem 2rem;
	font-size: 1.4rem;
	font-weight: 600;
	border: none;
	border-radius: 0.8rem;
	cursor: pointer;
	transition: all 0.3s;
	background: ${props => props.active ? '#e67e22' : '#f0f0f0'};
	color: ${props => props.active ? 'white' : '#333'};
	
	&:hover {
		background: ${props => props.active ? '#d35400' : '#e0e0e0'};
	}
`;

const MenuContainer = styled.div`
	flex: 1;
	overflow-y: auto;
	padding: 1rem;
	
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

const WeekTitle = styled.h3`
	font-size: 2rem;
	color: #333;
	text-align: center;
	margin-bottom: 1.5rem;
	background: linear-gradient(135deg, #e67e22 0%, #f39c12 100%);
	color: white;
	padding: 1rem;
	border-radius: 0.8rem;
`;

const MenuTable = styled.table`
	width: 100%;
	border-collapse: collapse;
	font-size: 1.3rem;
	
	@media (max-width: 768px) {
		font-size: 1.1rem;
	}
`;

const TableHead = styled.thead`
	background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
	color: white;
	position: sticky;
	top: 0;
	z-index: 1;
`;

const TableHeadRow = styled.tr``;

const TableHeadCell = styled.th`
	padding: 1rem 0.5rem;
	text-align: center;
	font-weight: 600;
	border: 1px solid #2980b9;
	
	&:first-child {
		width: 8%;
	}
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr`
	&:nth-child(even) {
		background-color: #f8f9fa;
	}
	
	&:hover {
		background-color: #e3f2fd;
	}
`;

const TableCell = styled.td`
	padding: 0.8rem 0.5rem;
	text-align: center;
	border: 1px solid #ddd;
	vertical-align: middle;
	line-height: 1.4;
`;

const DayCell = styled(TableCell)`
	font-weight: 600;
	background: linear-gradient(135deg, #e67e22 0%, #f39c12 100%);
	color: white;
	writing-mode: vertical-rl;
	text-orientation: mixed;
	transform: rotate(180deg);
	width: 4rem;
	min-width: 4rem;
`;

const DateCell = styled(TableCell)`
	font-weight: 500;
	color: #e67e22;
	min-width: 6rem;
`;

const MealTypeHeader = styled.th`
	background: #27ae60;
	color: white;
	padding: 0.5rem;
	font-size: 1.1rem;
`;

const SessionHeader = styled.div`
	display: flex;
	justify-content: center;
	gap: 2rem;
	margin-bottom: 1rem;
`;

const SessionBadge = styled.span<{ type: 'sang' | 'trua' }>`
	padding: 0.5rem 1.5rem;
	border-radius: 2rem;
	font-weight: 600;
	font-size: 1.4rem;
	background: ${props => props.type === 'sang' ? '#3498db' : '#e74c3c'};
	color: white;
`;

const HolidayCell = styled(TableCell)`
	background: #fff3e0;
	color: #e67e22;
	font-weight: 600;
	font-style: italic;
`;

const MenuImage = styled.img`
	max-width: 100%;
	max-height: 100%;
	object-fit: contain;
	border-radius: 0.5rem;
`;

const ImageContainer = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: auto;
	padding: 1rem;
`;

// Dữ liệu thực đơn theo tuần
const menuData = {
	tuan1: {
		title: "THỰC ĐƠN TUẦN 1",
		isImage: true,
		image: tuan1Img,
		days: []
	},
	tuan2: {
		title: "THỰC ĐƠN TUẦN 2",
		isImage: true,
		image: tuan2Img,
		days: []
	},
	tuan3: {
		title: "THỰC ĐƠN TUẦN 3 THÁNG 1",
		isImage: true,
		image: tuan3Img,
		days: []
	},
	tuan4: {
		title: "THỰC ĐƠN TUẦN IV",
		isImage: true,
		image: tuan4Img,
		days: []
	}
};

export const ThucDonModal: React.FC<ThucDonModalProps> = ({ isOpen, onClose }) => {
	const [activeTab, setActiveTab] = useState<'tuan1' | 'tuan2' | 'tuan3' | 'tuan4'>('tuan4');

	const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	React.useEffect(() => {
		if (isOpen) {
			setActiveTab('tuan4');
		}
	}, [isOpen]);

	const currentMenu = menuData[activeTab];

	return (
		<ModalOverlay isOpen={isOpen} onClick={handleOverlayClick}>
			<ModalContent>
				<CloseButton onClick={onClose}>×</CloseButton>
				<ModalTitle>🍽️ Thực Đơn Nhà Trường</ModalTitle>
				
				<TabContainer>
					<TabButton active={activeTab === 'tuan1'} onClick={() => setActiveTab('tuan1')}>
						Tuần 1
					</TabButton>
					<TabButton active={activeTab === 'tuan2'} onClick={() => setActiveTab('tuan2')}>
						Tuần 2
					</TabButton>
					<TabButton active={activeTab === 'tuan3'} onClick={() => setActiveTab('tuan3')}>
						Tuần 3
					</TabButton>
					<TabButton active={activeTab === 'tuan4'} onClick={() => setActiveTab('tuan4')}>
						Tuần 4
					</TabButton>
				</TabContainer>

				<SessionHeader>
					<SessionBadge type="sang">🌅 SÁNG</SessionBadge>
					<SessionBadge type="trua">☀️ TRƯA</SessionBadge>
				</SessionHeader>

				<MenuContainer>
					<WeekTitle>TRƯỜNG MẦM NON TRÚC ĐÀO - {currentMenu.title}</WeekTitle>
					
					{currentMenu.isImage ? (
						<ImageContainer>
							<MenuImage src={currentMenu.image} alt={currentMenu.title} />
						</ImageContainer>
					) : (
					<MenuTable>
						<TableHead>
							<TableHeadRow>
								<TableHeadCell rowSpan={2}>THỨ</TableHeadCell>
								<TableHeadCell rowSpan={2}>NGÀY</TableHeadCell>
								<TableHeadCell colSpan={3} style={{background: '#3498db'}}>SÁNG</TableHeadCell>
								<TableHeadCell colSpan={4} style={{background: '#e74c3c'}}>TRƯA</TableHeadCell>
								<TableHeadCell colSpan={2} style={{background: '#27ae60'}}>XẾ</TableHeadCell>
							</TableHeadRow>
							<TableHeadRow>
								<MealTypeHeader>BỮA SÁNG/ NỮA BUỔI</MealTypeHeader>
								<MealTypeHeader>PHỤ</MealTypeHeader>
								<MealTypeHeader>CÁC MẦM/ CHẬU</MealTypeHeader>
								<MealTypeHeader style={{background: '#c0392b'}}>CƠM</MealTypeHeader>
								<MealTypeHeader style={{background: '#c0392b'}}>MÓN CHÍNH/ CANH</MealTypeHeader>
								<MealTypeHeader style={{background: '#c0392b'}}>TRÁNG MIỆNG</MealTypeHeader>
								<MealTypeHeader style={{background: '#c0392b'}}>CÁC MẦM/ NHÀ TRẺ</MealTypeHeader>
								<MealTypeHeader style={{background: '#1e8449'}}>BỮA PHỤ</MealTypeHeader>
								<MealTypeHeader style={{background: '#1e8449'}}>SỮA</MealTypeHeader>
							</TableHeadRow>
						</TableHead>
						<TableBody>
							{currentMenu.days.map((day, index) => (
								day.holiday ? (
									<TableRow key={index}>
										<DayCell>{day.day}</DayCell>
										<DateCell>{day.date}</DateCell>
										<HolidayCell colSpan={9}>{day.holiday}</HolidayCell>
									</TableRow>
								) : (
									<TableRow key={index}>
										<DayCell>{day.day}</DayCell>
										<DateCell>{day.date}</DateCell>
										<TableCell>{day.sang?.bua_sang || ''}</TableCell>
										<TableCell>{day.sang?.nua_buoi || ''}</TableCell>
										<TableCell>{day.sang?.com_chau || ''}</TableCell>
										<TableCell>{day.trua?.com || ''}</TableCell>
										<TableCell>{day.trua?.mon_chinh}{day.trua?.canh ? `, ${day.trua.canh}` : ''}</TableCell>
										<TableCell>{day.trua?.trang_mieng || ''}</TableCell>
										<TableCell>{day.trua?.mon_chinh_nho || ''}</TableCell>
										<TableCell>{day.xanh?.bua_phu || ''}</TableCell>
										<TableCell>{day.xanh?.sua || ''}</TableCell>
									</TableRow>
								)
							))}
						</TableBody>
					</MenuTable>
					)}
				</MenuContainer>
			</ModalContent>
		</ModalOverlay>
	);
};
