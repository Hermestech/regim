import * as React from "react";
import styled from "styled-components";
import Typography from "../atoms/typography";
import cards from "@/utils/cards-list.json";
import Image from "next/image";
import { useMobile } from "@/hooks/useMobile";

interface IFeature { 
    id: number;
    image_url: string;
    title: string;
    description: string;
}

const mapFeaturesToCards = (features: IFeature[], isMobile: boolean) => { 
  console.log(isMobile)
    return features.map((feature) => (
    <Feature key={feature.id}>
      <FlexContainer>
          <Image
            src={feature.image_url}
            width={isMobile ? 56 : 88}
            height={isMobile ? 56 : 88}
            alt="icono de caracteristica" />
        <TextContainer>
          <Typography variant="title">{feature.title}</Typography>
          <Typography variant="body" style={{color: '#374151'}}>{feature.description}</Typography>
        </TextContainer>
      </FlexContainer>
    </Feature>
    ))
}

export const Features = () => { 
    const listOfCards  = cards.features_list;
    const isMobile = useMobile();
    return (
        <FeatureSection>
            <FeatureTitle>
            <Typography
                variant="displaymd"
                >
                    All-in-one Event Platform
            </Typography>
            <Typography
              variant="bodymd"
              as={'p'}
              style={{color: '#374151'}}
                >
                Deliver an exceptional event experience
            </Typography>    
            </FeatureTitle>
      <VideoWrapper>
        <Video controls >
          <source src="https://www.youtube.com/embed/oOu8ItOGgF8" type="video/mp4" />

        </Video>
        <Button>See it in action (2min)</Button>        
      </VideoWrapper>
      <FeaturesWrapper>
        {mapFeaturesToCards(listOfCards, isMobile)}
      </FeaturesWrapper>
    </FeatureSection>
    )
}

const Button = styled.button`
  height: 48px;
  position: absolute;
  bottom: -24px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  color: #000;
  border-radius: 24px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media (max-width: 500px) {
    width: 200px;
  }
`;

const FeatureSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #E5E7EB;
  width: 90%;
  margin: 80px auto;
  padding-top: 96px;
`;

const VideoWrapper = styled.div`
  width: 80%;
  max-width: 800px;
  margin-bottom: 48px;
  position: relative;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const Video = styled.video`
  width: 100%;
  display: block;
`;

const FeaturesWrapper = styled.div`
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(3, minmax(250px, 1fr));
  grid-gap: 80px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(200px, 1fr));
  }

  @media (max-width: 500px) { 
    grid-template-columns: repeat(1, minmax(200px, 1fr));
  }
`;


const Feature = styled.div`
  padding: 1rem;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  @media (max-width: 500px) {
    flex-direction: row;
    gap: 1rem;
    text-align: left;
  }
`;

const TextContainer = styled.div`
  margin-left: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 1rem;
  @media (max-width: 500px) {
    margin-left: 0;
    width: 80%;
  }
`;

const FeatureTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-bottom: 48px;
    gap: 1rem;
`