import * as Styles from './main.styles';

export const Main = () => {
  return (
    <Styles.Wrapper>
      <Styles.Logo
        src="/images/logo/next-js.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado."
      />
      <Styles.Title>Next boilerplate</Styles.Title>
      <Styles.Description>
        NextJS, TypeScript e Styled Components
      </Styles.Description>
    </Styles.Wrapper>
  );
};
