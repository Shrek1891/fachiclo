import React from 'react'
import styled from 'styled-components'
// https://formspree.io/
const Contact = () => {
    return (
        <Wrapper>
            <div className='section-center'>
                <h3>Join our newsletter and subscribe to the weekly newsletter </h3>
                <div className='content'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere vel nulla eu
                        dignissim. Etiam quis iaculis nibh, in laoreet magna. Maecenas semper congue dolor, eu mattis
                        sapien
                        interdum ac. Suspendisse diam ipsum, laoreet sit amet dolor viverra, euismod molestie tortor.
                        Mauris
                        elementum, eros vel rhoncus egestas, sem enim lobortis massa, vitae finibus lectus lacus a
                        neque. Ut
                        id nisi lorem. Suspendisse ac iaculis est, nec pellentesque augue.
                    </p>
                    <form className='contact-form'>

                        <input
                            type='email'
                            className='form-input'
                            placeholder='enter email'
                        />
                        <button type='submit' className='submit-btn'>
                            subscribe
                        </button>
                    </form>
                </div>
            </div>
        </Wrapper>

    )
}
const Wrapper = styled.section`
  padding: 5rem 0;

  h3 {
    text-transform: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }

  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
  }

  .form-input {
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }

  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }

  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }

  .submit-btn {
    background: var(--clr-grey-1);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-grey-9);
  }

  .submit-btn:hover {
    color: var(--clr-white);
    background: var(--clr-grey-3);
  }

  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }

    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
`

export default Contact
