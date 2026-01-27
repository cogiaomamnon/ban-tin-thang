import React, { useState } from "react";
import styled from "styled-components";

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

// Dữ liệu thực đơn theo tuần
const menuData = {
	thang12: {
		title: "THỰC ĐƠN TUẦN IV THÁNG 12",
		days: [
			{
				day: "Hai",
				date: "29/12",
				sang: {
					bua_sang: "Soup bột thịt",
					nua_buoi: "Sữa",
					com_chau: "Sữa hạt/ Cháo thịt bò bí đỏ",
				},
				trua: {
					com: "Cơm/ Cháo",
					mon_chinh: "Gà xào nấm",
					canh: "Canh bầu xương",
					trang_mieng: "Đu đủ",
					mon_chinh_nho: "Cháo/ Nui gà",
				},
				xanh: {
					bua_phu: "Chè đậu đen",
					sua: "Sữa"
				}
			},
			{
				day: "Ba",
				date: "30/12",
				sang: {
					bua_sang: "Soup bột bò",
					nua_buoi: "Sữa hạt",
					com_chau: "Sữa hạt/ Cháo thịt xay xốt cà",
				},
				trua: {
					com: "Cơm/ Cháo",
					mon_chinh: "Cá chiên giòn",
					canh: "Canh cải thảo",
					trang_mieng: "Thanh long",
					mon_chinh_nho: "Cháo cá/ Nui bò",
				},
				xanh: {
					bua_phu: "Bánh bông lan nướng",
					sua: "Sữa"
				}
			},
			{
				day: "Tư",
				date: "31/12",
				sang: {
					bua_sang: "Soup bột Elise",
					nua_buoi: "Cháo bột",
					com_chau: "Sữa/ Bánh canh",
				},
				trua: {
					com: "Cơm",
					mon_chinh: "Tiệc buffet",
					canh: "",
					trang_mieng: "",
					mon_chinh_nho: "Tiệc buffet",
				},
				xanh: {
					bua_phu: "Bánh custar",
					sua: "Elise"
				}
			},
			{
				day: "Năm",
				date: "1/1",
				holiday: "NGHỈ LỄ"
			}
		]
	},
	tuan1: {
		title: "THỰC ĐƠN TUẦN 1",
		days: [
			{
				day: "Hai",
				date: "5/1",
				sang: {
					bua_sang: "Hủ tiếu",
					nua_buoi: "Sữa hạt/ Elise",
					com_chau: "Cháo thịt (Vịm thái)",
				},
				trua: {
					com: "Cơm",
					mon_chinh: "Canh xương, Sườn chiên xả",
					canh: "Canh",
					trang_mieng: "Chùm ruột",
					mon_chinh_nho: "Sữa hạt/ Cháo thịt xay",
				},
				xanh: {
					bua_phu: "Sữa hạt/ Cháo thịt đậu",
					sua: "Sữa hạt Elise"
				}
			},
			{
				day: "Ba",
				date: "6/1",
				sang: {
					bua_sang: "Soup bột thịt",
					nua_buoi: "Sữa hạt/ Elise",
					com_chau: "Cháo Ếch Bí trứng",
				},
				trua: {
					com: "Cơm",
					mon_chinh: "Sườn kho, Canh mùng",
					canh: "Canh",
					trang_mieng: "Ổi",
					mon_chinh_nho: "Sữa hạt/ Cháo thịt",
				},
				xanh: {
					bua_phu: "Sữa hạt/ Cháo thịt bí đỏ",
					sua: "Sữa hạt Elise"
				}
			},
			{
				day: "Tư",
				date: "7/1",
				sang: {
					bua_sang: "Súp Ếch là Chanh",
					nua_buoi: "Sữa hạt/ Elise",
					com_chau: "Cháo tôm rau mầm",
				},
				trua: {
					com: "Cơm",
					mon_chinh: "Cá xốt chua ngọt, Rau luộc",
					canh: "Canh tôm",
					trang_mieng: "Dưa hấu",
					mon_chinh_nho: "Sữa hạt/ Cháo cá",
				},
				xanh: {
					bua_phu: "Sữa hạt/ Cháo thịt",
					sua: "Sữa hạt Elise"
				}
			},
			{
				day: "Năm",
				date: "8/1",
				sang: {
					bua_sang: "Cháo lòng",
					nua_buoi: "Sữa hạt/ Elise",
					com_chau: "Cháo thịt",
				},
				trua: {
					com: "Cơm",
					mon_chinh: "Thịt kho tiêu, Canh bắp cải",
					canh: "Canh",
					trang_mieng: "Chuối",
					mon_chinh_nho: "Sữa hạt/ Cháo thịt",
				},
				xanh: {
					bua_phu: "Sữa hạt/ Cháo thịt bí",
					sua: "Sữa hạt Elise"
				}
			},
			{
				day: "Sáu",
				date: "9/1",
				sang: {
					bua_sang: "Cháo",
					nua_buoi: "Sữa hạt/ Elise",
					com_chau: "Cháo",
				},
				trua: {
					com: "Cơm",
					mon_chinh: "Đậu hũ nhồi thịt, Canh mồng tơi",
					canh: "Canh",
					trang_mieng: "Xoài",
					mon_chinh_nho: "Sữa hạt/ Cháo thịt",
				},
				xanh: {
					bua_phu: "Mụi bò, Sữa hạt",
					sua: "Sữa hạt Elise"
				}
			}
		]
	},
	tuan2: {
		title: "THỰC ĐƠN TUẦN 2",
		days: [
			{
				day: "Hai",
				date: "12/1",
				sang: {
					bua_sang: "Bánh mì trứng",
					nua_buoi: "Sữa hạt/ Sữa hạt",
					com_chau: "Cháo thịt",
				},
				trua: {
					com: "Cơm",
					mon_chinh: "Canh xương, Thịt luộc",
					canh: "Canh",
					trang_mieng: "Ếch xào Sữa hạt/ Sữa hạt",
					mon_chinh_nho: "Sữa hạt/ Cháo thịt",
				},
				xanh: {
					bua_phu: "Sữa hạt/ Cháo thịt",
					sua: "Sữa hạt Elise"
				}
			},
			{
				day: "Ba",
				date: "13/1",
				sang: {
					bua_sang: "Cháo Ếch bí",
					nua_buoi: "Sữa hạt/ Sữa hạt",
					com_chau: "Soup bột/ Ca kho",
				},
				trua: {
					com: "Cơm",
					mon_chinh: "Cá kho Sữa hạt/ Luộc Sữa hạt",
					canh: "Canh",
					trang_mieng: "Chuối",
					mon_chinh_nho: "Cháo cá 12 tháng",
				},
				xanh: {
					bua_phu: "Sữa hạt/ Cháo thịt",
					sua: "Sữa hạt Elise"
				}
			},
			{
				day: "Tư",
				date: "14/1",
				sang: {
					bua_sang: "Soup bột/ Sữa hạt",
					nua_buoi: "Sữa hạt/ Sữa hạt",
					com_chau: "Cháo sườn/ Sữa hạt",
				},
				trua: {
					com: "Cơm",
					mon_chinh: "Sườn kho Sữa hạt/ Sữa hạt Canh",
					canh: "Canh",
					trang_mieng: "Dưa hấu",
					mon_chinh_nho: "Cháo sườn Sữa hạt",
				},
				xanh: {
					bua_phu: "Sữa hạt/ Cháo thịt",
					sua: "Sữa hạt Elise"
				}
			},
			{
				day: "Năm",
				date: "15/1",
				sang: {
					bua_sang: "Sữa hạt/ Sữa hạt",
					nua_buoi: "Sữa hạt/ Sữa hạt",
					com_chau: "Cháo gà",
				},
				trua: {
					com: "Cơm",
					mon_chinh: "Gà kho Sữa hạt/ Sữa hạt Canh",
					canh: "Canh bí đao",
					trang_mieng: "Chuối",
					mon_chinh_nho: "Cháo gà Sữa hạt",
				},
				xanh: {
					bua_phu: "Chè Sữa hạt đậu",
					sua: "Sữa hạt Elise"
				}
			},
			{
				day: "Sáu",
				date: "16/1",
				sang: {
					bua_sang: "Sữa hạt/ Sữa hạt",
					nua_buoi: "Sữa hạt/ Sữa hạt",
					com_chau: "Cháo bò Sữa hạt",
				},
				trua: {
					com: "Cơm",
					mon_chinh: "Bò xào Sữa hạt/ Sữa hạt Canh",
					canh: "Canh mướp",
					trang_mieng: "Xoài",
					mon_chinh_nho: "Cháo bò Sữa hạt",
				},
				xanh: {
					bua_phu: "Chè thập cẩm Sữa hạt",
					sua: "Sữa hạt Elise"
				}
			},
			{
				day: "Bảy",
				date: "17/1",
				sang: {
					bua_sang: "Sữa hạt/ Cháo thập cẩm",
					nua_buoi: "",
					com_chau: "",
				},
				trua: {
					com: "",
					mon_chinh: "",
					canh: "",
					trang_mieng: "",
					mon_chinh_nho: "",
				},
				xanh: {
					bua_phu: "",
					sua: ""
				}
			}
		]
	},
	tuan3: {
		title: "THỰC ĐƠN TUẦN 3 THÁNG 1",
		days: [
			{
				day: "Hai",
				date: "19/1",
				sang: {
					bua_sang: "Báo khéo",
					nua_buoi: "Sữa hạt/ Elise",
					com_chau: "Canh bột bún/ Bún thịt/ Mở vịt",
				},
				trua: {
					com: "Cơm",
					mon_chinh: "Canh xương, Bầu tôm",
					canh: "Canh",
					trang_mieng: "Chuối",
					mon_chinh_nho: "Cháo thịt/ Sữa hạt/ Elise",
				},
				xanh: {
					bua_phu: "Sữa hạt/ Cháo thịt",
					sua: "Soup bột Elise"
				}
			},
			{
				day: "Ba",
				date: "20/1",
				sang: {
					bua_sang: "Sữa hạt/ Elise",
					nua_buoi: "Sữa hạt/ Elise",
					com_chau: "Cháo",
				},
				trua: {
					com: "Cơm",
					mon_chinh: "Cá kho, Canh bầu",
					canh: "Canh",
					trang_mieng: "Xoài",
					mon_chinh_nho: "Cháo cá/ Sữa hạt/ Elise",
				},
				xanh: {
					bua_phu: "Sữa hạt/ Cháo thịt bí",
					sua: "Sữa hạt Elise"
				}
			},
			{
				day: "Tư",
				date: "21/1",
				sang: {
					bua_sang: "Sữa hạt/ Elise",
					nua_buoi: "Sữa hạt/ Elise",
					com_chau: "Cháo gà rau mầm",
				},
				trua: {
					com: "Cơm",
					mon_chinh: "Gà chiên, Xoài",
					canh: "Canh nấm",
					trang_mieng: "Nước cam",
					mon_chinh_nho: "Cháo gà/ Sữa hạt/ Elise",
				},
				xanh: {
					bua_phu: "Bánh tiêu",
					sua: "Sữa hạt Elise"
				}
			},
			{
				day: "Năm",
				date: "22/1",
				sang: {
					bua_sang: "Sữa hạt Elise",
					nua_buoi: "Sữa hạt/ Elise",
					com_chau: "Bánh/ Cháo thịt",
				},
				trua: {
					com: "Cơm",
					mon_chinh: "Trứng chiên, Canh cải",
					canh: "Canh",
					trang_mieng: "Soup bột Sữa hạt",
					mon_chinh_nho: "Cháo thịt/ Sữa hạt/ Elise",
				},
				xanh: {
					bua_phu: "Mỳ xào",
					sua: "Sữa hạt Elise"
				}
			},
			{
				day: "Sáu",
				date: "23/1",
				sang: {
					bua_sang: "Sữa hạt/ Elise",
					nua_buoi: "Sữa hạt/ Elise",
					com_chau: "Cháo bò",
				},
				trua: {
					com: "Cơm",
					mon_chinh: "Bò xào, Canh bí",
					canh: "Canh",
					trang_mieng: "Chuối",
					mon_chinh_nho: "Cháo bò/ Sữa hạt/ Elise",
				},
				xanh: {
					bua_phu: "Canh bún",
					sua: "Sữa hạt Elise"
				}
			},
			{
				day: "Bảy",
				date: "24/1",
				sang: {
					bua_sang: "Xôi gấc",
					nua_buoi: "",
					com_chau: "Cháo thịt",
				},
				trua: {
					com: "",
					mon_chinh: "",
					canh: "",
					trang_mieng: "",
					mon_chinh_nho: "",
				},
				xanh: {
					bua_phu: "",
					sua: ""
				}
			}
		]
	},
	tuan4: {
		title: "THỰC ĐƠN TUẦN IV",
		days: [
			{
				day: "Hai",
				date: "26/1",
				sang: {
					bua_sang: "Hủ tiếu",
					nua_buoi: "Sữa hạt/ Elise",
					com_chau: "Sữa hạt",
				},
				trua: {
					com: "Cơm",
					mon_chinh: "Thịt kho trứng",
					canh: "Canh cải",
					trang_mieng: "",
					mon_chinh_nho: "Sữa hạt/ Cháo thịt",
				},
				xanh: {
					bua_phu: "Sữa hạt/ Cháo bò",
					sua: "Sữa hạt Elise"
				}
			},
			{
				day: "Ba",
				date: "27/1",
				sang: {
					bua_sang: "Sữa hạt",
					nua_buoi: "Sữa hạt/ Elise",
					com_chau: "Sữa hạt",
				},
				trua: {
					com: "Cơm",
					mon_chinh: "Cá kho",
					canh: "Canh bầu",
					trang_mieng: "",
					mon_chinh_nho: "Sữa hạt/ Cháo cá",
				},
				xanh: {
					bua_phu: "Sữa hạt/ Cháo gà",
					sua: "Sữa hạt Elise"
				}
			},
			{
				day: "Tư",
				date: "28/1",
				holiday: "NGHỈ TẾT"
			},
			{
				day: "Năm",
				date: "29/1",
				holiday: "NGHỈ TẾT"
			},
			{
				day: "Sáu",
				date: "30/1",
				holiday: "NGHỈ TẾT"
			}
		]
	}
};

export const ThucDonModal: React.FC<ThucDonModalProps> = ({ isOpen, onClose }) => {
	const [activeTab, setActiveTab] = useState<'thang12' | 'tuan1' | 'tuan2' | 'tuan3' | 'tuan4'>('tuan4');

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
					<TabButton active={activeTab === 'thang12'} onClick={() => setActiveTab('thang12')}>
						Tuần 4 Tháng 12
					</TabButton>
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
				</MenuContainer>
			</ModalContent>
		</ModalOverlay>
	);
};
