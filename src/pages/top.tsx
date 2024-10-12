import * as React from 'react'
import styled from 'styled-components'
import { FaMapMarkerAlt } from "react-icons/fa";
import CoverImage from '../images/cover-image.png';
import TravelImage from '../images/icon_travel.png';
import MapImage from '../images/cover-map.png';
import AmericaImage from '../images/America.jpg';
import { Link } from 'react-router-dom'

const Header = styled.header`
  font-size: 1.5rem;
  height: 2rem;
  left: 0;
  line-height: 2rem;
  padding: 0.5rem 1rem;
  position: fixed;
  right: 0;
  top: 0;
  background-image: url(${CoverImage});
`

const Wrapper = styled.div`
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 3rem;
`

const MainArea = styled.div`
  border-right: 1px solid silver;
  border-top: 1px solid silver;
  bottom: 0;
  font-size: 1rem;
  left: 0;
  padding: 0.5rem;
  position: absolute;
  top: 0;
  width: 100vw;
  background-image: url(${CoverImage});
`
const MainBackGraund = styled.div`
  position: absolute;
  top: 80px;
  bottom: 50px;
  left: 80px;
  right: 80px;
  padding: 0 15px 5px;
  background: rgb(240, 79, 4);
  border-radius: 30px;
`
const TravelLogo = styled.div`
  background-size: cover !important;
  position: relative;
  top: 20px;
  left: 0px;
  height: 150px;
  width: 400px;
  background-image: url(${TravelImage});
`
const Map = styled.div`
  background-size: cover !important;
  position: relative;
  left: 20px;
  top: 40px;
  height: 700px;
  width: 1000px;
  background-image: url(${MapImage});
`
const CountryImage = styled.div`
  background-size: cover !important;
  position: absolute;
  top: 180px;
  left: 300px;
  height: 400px;
  width: 600px;
  margin-top: 0px;
  margin-left: 800px;
  border-radius: 30px;
  background-image: url(${AmericaImage});
`
const Germany = styled.h2`
  position: absolute;
  top: 300px;
  left: 150px;
  color: white;
`
const Malta = styled.h2`
  position: absolute;
  top: 335px;
  left: 164px;
  color: white;
`
const Vietnam = styled.h2`
  position: absolute;
  top: 393px;
  left: 363px;
  color: white;
`
const Australia = styled.h2`
  position: absolute;
  top: 490px;
  left: 425px;
  color: white;
`
const Hawaii = styled.h2`
  position: absolute;
  top: 370px;
  left: 570px;
  color: white;
`
const America = styled.h2`
  position: absolute;
  top:320px;
  left: 720px;
  color: white;
`

const Preview = styled.div`
  border-top: 1px solid silver;
  bottom: 0;
  overflow-y: scroll;
  padding: 1rem;
  position: absolute;
  right: 0;
  top: 0;
  width: 50vw;
`

export const Top: React.FC = () => {
  return (
    <>
      <Header>
        Markdown Editor
      </Header>
      <Wrapper>
        <MainArea>
          <MainBackGraund>
            <TravelLogo>
              <Map>
                <Link to="/sub">
                  <Germany><FaMapMarkerAlt/></Germany>
                </Link>
                <Link to="/sub">
                  <Malta><FaMapMarkerAlt/></Malta>
                </Link>
                <Link to="/sub">
                  <Vietnam><FaMapMarkerAlt/></Vietnam>
                </Link>
                <Link to="/sub">
                  <Australia><FaMapMarkerAlt/></Australia>
                </Link>
                <Link to="/sub">
                  <Hawaii><FaMapMarkerAlt/></Hawaii>
                </Link>
                <Link to="/sub">
                  <America><FaMapMarkerAlt/></America>
                </Link>
              </Map>
            </TravelLogo>
            <CountryImage></CountryImage>
          </MainBackGraund>
        </MainArea>
      </Wrapper>
    </>
  )
}
