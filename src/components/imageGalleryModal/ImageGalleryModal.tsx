import React, { useState } from "react";
import styled from "styled-components";

// Import images from tuyenTruyen folder using require
const images = [
	require("../../img/tuyenTruyen/aaa.jpg"),
	require("../../img/tuyenTruyen/bbb.png"),
	require("../../img/tuyenTruyen/ccc.png"),
	require("../../img/tuyenTruyen/sds.jpg"),
	require("../../img/tuyenTruyen/xxx.png")
];

interface ImageGalleryModalProps {
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
	width: 90vw;
	height: 90vh;
	max-width: 90vw;
	max-height: 90vh;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
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
	color: #333;
	text-align: center;
	flex-shrink: 0;
`;

const ImageContainer = styled.div`
	position: relative;
	width: 100%;
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 1rem 0;
	overflow: hidden;
`;

const CurrentImage = styled.img`
	max-width: 100%;
	max-height: 100%;
	width: auto;
	height: auto;
	object-fit: contain;
	border-radius: 0.8rem;
	box-shadow: 0 0.8rem 1.6rem rgba(0, 0, 0, 0.2);
`;

const NavigationButton = styled.button`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	background: rgba(255, 255, 255, 0.9);
	color: #333;
	border: none;
	border-radius: 50%;
	width: 5rem;
	height: 5rem;
	font-size: 2.4rem;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.3s;
	z-index: 5;

	&:hover {
		background: white;
		transform: translateY(-50%) scale(1.1);
	}

	&:disabled {
		opacity: 0.3;
		cursor: not-allowed;
		&:hover {
			transform: translateY(-50%);
		}
	}
`;

const PrevButton = styled(NavigationButton)`
	left: 1rem;
`;

const NextButton = styled(NavigationButton)`
	right: 1rem;
`;

const ImageCounter = styled.div`
	font-size: 1.8rem;
	color: #666;
	margin-top: 1rem;
	text-align: center;
	flex-shrink: 0;
`;

export const ImageGalleryModal: React.FC<ImageGalleryModalProps> = ({ isOpen, onClose }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	const handlePrevious = () => {
		setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
	};

	const handleNext = () => {
		setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
	};

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === 'ArrowLeft') {
			handlePrevious();
		} else if (e.key === 'ArrowRight') {
			handleNext();
		} else if (e.key === 'Escape') {
			onClose();
		}
	};

	React.useEffect(() => {
		if (isOpen) {
			setCurrentIndex(0);
		}
	}, [isOpen]);

	return (
		<ModalOverlay isOpen={isOpen} onClick={handleOverlayClick} onKeyDown={handleKeyDown} tabIndex={-1}>
			<ModalContent>
				<CloseButton onClick={onClose}>×</CloseButton>
				<ModalTitle>Góc Phụ Huynh</ModalTitle>
				<ImageContainer>
					<PrevButton onClick={handlePrevious} aria-label="Previous image">
						‹
					</PrevButton>
					<CurrentImage
						src={images[currentIndex]}
						alt={`Góc phụ huynh ${currentIndex + 1}`}
					/>
					<NextButton onClick={handleNext} aria-label="Next image">
						›
					</NextButton>
				</ImageContainer>
				<ImageCounter>
					{currentIndex + 1} / {images.length}
				</ImageCounter>
			</ModalContent>
		</ModalOverlay>
	);
};

