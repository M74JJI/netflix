import React from 'react';
import { FaqsContainer } from '../containers/faqs';
import FooterContainer from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { JumbotronContainer } from '../containers/Jumbotron';
import { OptForm, Feature } from '../components';

function Home() {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>
                        Unlimited movies, TV shows, and more.
                    </Feature.Title>
                    <Feature.SubTitle>
                        Watch anywhere. Cancel anytime.
                    </Feature.SubTitle>
                    <OptForm>
                        <OptForm.Text>
                            Ready to watch? Enter your email to create or
                            restart your membership.
                        </OptForm.Text>{' '}
                        <OptForm.Break />
                        <OptForm.Input placeholder="Email address" />
                        <OptForm.Button>Get Started</OptForm.Button>
                    </OptForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    );
}

export default Home;
