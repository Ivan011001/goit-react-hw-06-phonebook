import { Title, SectionContainer } from './Section.styled';

export default function Section({ title, children }) {
  return (
    <SectionContainer>
      <Title>{title}</Title>
      {children}
    </SectionContainer>
  );
}
