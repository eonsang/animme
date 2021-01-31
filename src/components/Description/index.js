import React from 'react';
import styled from 'styled-components';
import Section from "../Layout/Section";
import Wrap from "../Layout/Wrap";

const Description = () => {
  return (
    <DescriptionLayout>
      <Section>
        <Wrap>
          <div className="flex">
            {
              ['', '', ''].map((item, index) => {
                return (
                  <div className="col" key={index}>
                    <h3 className={'font-garamond'}>Exhibited</h3>
                    {/*<p dangerouslySetInnerHTML={{__html: text.text}} />*/}
                    <p>
                      Salzburg, Galerie Ropac, Andy Warhol, Arbeiten 1962-1986:
                      August 1987, 1987, nos. 8, 12 (illustrated in colour).

                      Tokyo, Mistukoshi Ltd., Andy Warhol, 1991, p. 152, no. 9
                      (illustrated in colour, p. 42).

                      Tel Aviv, Tel Aviv Museum of Art, Andy Warhol, 1992, no. 6
                      (illustrated in colour).

                      Vienna, KunstHaus, Andy Warhol 1928-1987: Works from
                      the Collection of José Mugrabi and an Isle of Man Company,
                      1993, p. 101, no. 13 (illustrated in colour, unpaged).
                    </p>
                    <button><img src="/assets/images/icon-mor.png" alt=""/></button>
                  </div>
                )
              })
            }
          </div>
        </Wrap>
      </Section>
    </DescriptionLayout>
  );
};

const DescriptionLayout = styled.div`
  background:#fff;
  
  .flex {
    display: flex;
    @media screen and (max-width: 1200px) {
      display: block;
    }
  }
  .col {
    flex: 1;

    & ~ .col {
      margin-left: 2em;
      @media screen and (max-width: 1200px) {
        margin: 0;
        margin-top: 3em;
      }
    }
  }
  
  h3 {
    font-size: 2rem;
    line-height: 1.3em;
    padding-bottom: 5px;
    margin-bottom: 10px;
    border-bottom: 1px solid #222;
  }
  p {
    font-size: 1rem;
    line-height: 1.375em;
  }
  button {
    text-align: center;
    margin-top: 15px;
    width: 100%;
    img {
      vertical-align: top;
      height: 1.75rem;
    }
  }
`;

export default Description;
