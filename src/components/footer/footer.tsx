import {Logo} from "../../App.styled";
import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
    display: flex;
	padding-inline: 50px;
`

export const FooterSection = () => {
	return (<footer className="footer">
		<FooterContainer className="container">
			<div className="logo-col">
				<Logo>Trúc Đào</Logo>
			</div>
			<div className="address-col" style={{marginLeft: "auto"}}>
				<p className="footer-heading">Liên hệ với chúng tôi</p>
				<address className="contacts">
					<p>
						<a href="tel:415-201-6370">415-201-6370</a>
						<br/>
						<a href="mailto:hello@omnifood.com">trucdao@gmail.com</a>
					</p>
				</address>
			</div>
			<div className="address-col" style={{marginLeft: "auto"}}>
				<p className="footer-heading">Địa chỉ</p>
				<address className="contacts">
					<p className="address">
						20 Lý Tự Trọng, Thạch Thang, Hải Châu, Đà Nẵng 550000
					</p>
				</address>
			</div>

		</FooterContainer>
	</footer>)
}
