import { SmallButton } from '../smallButton/SmallButton';
import { Title } from '../title/Title';
import { Subtitle } from '../subtitle/Subtitle';
import { DescriptionText } from '../descriptionText/DescriptionText';

export const Description = () => {
  return (
    <div>
      <SmallButton />
      <Title content="front-end" />
      <Subtitle />
      <DescriptionText />
    </div>
  );
};
