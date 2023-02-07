import React from 'react'
import styled from 'styled-components'
import {PageHero} from '../components'
import aboutImg from '../assets/about.jpg'

const AboutPage = () => {
    return (
        <main>
            <PageHero title='about'/>
            <Wrapper className="page section section-center">
                <img src={aboutImg} alt='cloth'/>
                <article>
                    <title>our story</title>
                    <div className='underline'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae felis volutpat,
                        porttitor sem sed, porta neque. Duis ac mauris nec neque pulvinar fringilla. Nulla facilisi.
                        Nulla tristique nunc urna, eget vestibulum elit dictum in. Suspendisse tincidunt ultrices diam
                        quis consectetur. Etiam erat felis, varius eget magna nec, hendrerit luctus elit. Fusce
                        vulputate varius purus lacinia pulvinar.

                        Praesent arcu ex, finibus sed risus quis, porttitor consequat enim. Donec quis est et odio
                        finibus finibus. Sed tristique, metus eu dapibus fermentum, erat est fermentum neque, ac
                        hendrerit mi justo in diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                        posuere cubilia curae; Quisque pulvinar velit justo, eu iaculis sem scelerisque vel. Cras
                        tempor, augue in gravida gravida, tortor mauris volutpat tortor, a eleifend orci massa luctus
                        velit. Curabitur sed congue nibh. Curabitur feugiat lorem diam, nec blandit arcu lobortis et.

                    </div>
                </article>
            </Wrapper>
        </main>
    )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;

  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }

  .title {
    text-align: left;
  }

  .underline {
    margin-left: 0;
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
