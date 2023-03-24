import styled from "styled-components";
import Typography from "../atoms/typography";
import { Button } from "../atoms/button";
import Image from "next/image";
import { useMobile } from "@/hooks/useMobile";

const StyledFooter = styled.footer`
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #111827;
  color: #FFF;
  gap: 1rem;
  & > div {
    max-width: 800px;
    height: 132px;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
    padding: 0 2rem;
    @media (max-width: 500px) {
        height: 220px;
    }
  }
`;

const BottomFooter = styled.div`
    width: 100%;
    height: 30%;
    display: grid;
    grid-template-columns: 1fr .2fr 1fr;
    & > article {
        width: 80%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        & > div {
            width: 100%;
            height: 100%;
            border-bottom: .5px solid #FFF;
        }
        & > div:last-child {
            border-bottom: none;
        }
    }
    & > section {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    background-color: #111827;
`

const InfoText = styled.div`
    width: 100%;
    height: 100%;
    background-color: #111827;
    & > div {
        color: #9CA3AF;
        width: 91%;
        height:20px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;     
        padding-bottom: 40px;
        @media (max-width: 500px) {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
            padding-bottom: 80px;
        }
    }
`

export const Footer = () => {
    const isMobile = useMobile();
    return (
      <>
      <StyledFooter>
        <div>
            <Typography variant={isMobile ? 'displaysm': 'displaymd'}>
              Create your event with RegiM
              </Typography>
                    <Typography variant="subtitle" style={{ 
                        color: '#E0F2FE',
                        fontWeight: 400,
                        letterSpacing: '0.01em',
                        lineHeight: '24px'
               }}>
                Levearing our virtual and live event experience. Hubilo offers everything you need to set up your next hybrid event from registration to executing a flawless event.
              </Typography>
        </div>
          <Button
              variant="primary"
              size="large"
              label="Get Early Access"
          />  
     </StyledFooter>
            <BottomFooter>
                <article>
                    <div/>
                    <div/>
                </article>
                <section>
                    <Image src="/logo-footer.svg" width={100} height={100} alt="logo footer R"/>
                </section>
                <article>
                    <div/>
                    <div/>
                </article>
            </BottomFooter>
            <InfoText>
                <div>
                    <Typography variant="body">
                        ©RegiM 2022. Made with love by <a style={{ color: '#E0F2FE'}}>Landify</a>
                    </Typography>
                    <Typography variant="body">
                        For further details, drop a mail to
                        {isMobile && <br/>}
                        <a href=""
                            style={{ color: '#E0F2FE'}}
                        > hello@landify.design</a>
                    </Typography>
                </div>
            </InfoText>
        </>
  );
};
