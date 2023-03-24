import * as React from "react";
import styled from "styled-components";
import Typography from "../atoms/typography";
import cards from "@/utils/cards-list.json";
import Image from "next/image";

interface IFeature { 
    id: number;
    image_url: string;
    title: string;
    description: string;
}

const mapFeaturesToCards = (features: IFeature[]) => { 
    return features.map((feature) => (
        <Feature key={feature.id}>
            <Image src={feature.image_url} width={88} height={88} alt="icono de caracteristica"/>
            <Typography variant="title">{feature.title}</Typography>
            <Typography variant="body" style={{color: '#374151'}}>{ feature.description}</Typography>
        </Feature>
    ))
}

export const Features = () => { 
    const listOfCards  = cards.features_list;

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
                >
                Deliver an exceptional event experience
            </Typography>    
            </FeatureTitle>
      <VideoWrapper>
        <Video controls >
          <source src="/video.mp4" type="video/mp4" />
          <source src="/video.webm" type="video/webm" />
        </Video>
        <Button>See it in action (2min)</Button>        
      </VideoWrapper>
      <FeaturesWrapper>
        {mapFeaturesToCards(listOfCards)}
      </FeaturesWrapper>
    </FeatureSection>
    )
}
const FeatureDescription = styled.p``;

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
`;

const Feature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1rem;
  padding: 2.3rem;
`;


const FeatureTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 48px;
`