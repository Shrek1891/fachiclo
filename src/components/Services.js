import React from 'react'
import styled from 'styled-components'
import {services} from '../utils/constants'

const Services = () => {
    return (
        <Wrapper>
            <div className="section-center">
                <article className="header">
                    <h3>
                        find <br/>
                        your own style
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere vel nulla eu
                        dignissim. Etiam quis iaculis nibh, in laoreet magna. Maecenas semper congue dolor, eu mattis
                        sapien interdum ac. Suspendisse diam ipsum, laoreet sit amet dolor viverra, euismod molestie
                        tortor. Mauris elementum, eros vel rhoncus egestas, sem enim lobortis massa, vitae finibus
                        lectus lacus a neque. Ut id nisi lorem. Suspendisse ac iaculis est, nec pellentesque augue.
                    </p>
                </article>
                <div className="services-center">
                    {services.map((service) => {
                        const {id, icon, title, text} = service;
                        return <article key={id} className='service'>
                            <span className='icon'>{icon}</span>
                            <h4>{title}</h4>
                            {text}
                        </article>

                    })}
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  h3,
  h4 {
    color: var(--clr-primary-1);
  }

  padding: 5rem 0;

  background: var(--clr-grey-7);

  .header h3 {
    margin-bottom: 2rem;
  }

  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--clr-primary-1);
  }

  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }

  .service {
    background: var(--clr-grey-9);
    filter: drop-shadow(5px 5px 10px #000);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);

    p {
      color: var(--clr-primary-2);
    }
  }

  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-grey-1);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    color: var(--clr-white);

    svg {
      font-size: 2rem;
    }
  }

  .service:hover {
    transform: scale(1.05);
    transition: all 0.5s;
    cursor: pointer;
  }

  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`
export default Services
