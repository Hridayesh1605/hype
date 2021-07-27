import React from 'react';
import firebase from 'firebase/app';
import { Col, Container, Grid, Panel, Row, Icon, Button, Alert } from 'rsuite';
import { auth, database } from '../misc/firebase';

const SignIn = () => {
  const signInwithProvider = async Provider => {
    try {
      const { additionalUserInfo, user } = await auth.signInWithPopup(Provider);

      if (additionalUserInfo.isNewUser) {
        await database.ref(`/profile/${user.uid}`).set({
          name: user.displayName,
          createdAt: firebase.database.ServerValue.TIMESTAMP,
        });
      }
      Alert.success('signed In', 4000);
    } catch (err) {
      Alert.error(err.message, 4000);
    }
  };

  const onFacebookSignIn = () => {
    signInwithProvider(new firebase.auth.FacebookAuthProvider());
  };

  const onGoogleSignIn = () => {
    signInwithProvider(new firebase.auth.GoogleAuthProvider());
  };
  return (
    <Container>
      <Grid className="mt-page">
        <Row>
          <Col xs={24} md={12} mdOffset={6}>
            <Panel>
              <div className="text-center">
                <h2>Welcome to chat app</h2>
                <p>Progressive chat app</p>
              </div>
              <div className="mt-3">
                <Button block color="blue" onClick={onFacebookSignIn}>
                  <Icon icon="Facebook" />
                  Connect to facebook
                </Button>
                <Button block color="green" onClick={onGoogleSignIn}>
                  <Icon icon="Google" />
                  Connect to Google
                </Button>
              </div>
            </Panel>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};

export default SignIn;
