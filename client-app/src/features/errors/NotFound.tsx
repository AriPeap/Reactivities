import { Link } from "react-router-dom";
import { Button, Header, Icon, Segment } from "semantic-ui-react";

export default function NotFound() {
  return (
    <Segment placeholder>
      <Header>
        <Icon name="search">
          Ooops - we've lookde everywhere but could not find what you are
          looking for!
        </Icon>
      </Header>
      <Segment.Inline>
        <Button as={Link} to="/activities">
          Back to activities page
        </Button>
      </Segment.Inline>
    </Segment>
  );
}
