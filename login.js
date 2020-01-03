import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,KeyboardAvoidingView
} from 'react-native';
import Constant from '../app/helper/themeHelper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from './helper/responsiveScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feathericon from 'react-native-vector-icons/Feather';
import EvilIcon from 'react-native-vector-icons/EvilIcons';

export default class LoginBasic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
    };
  }
  ShowHideTextComponentView = () => {
    if (this.state.status) {
      this.setState({status: false});
    } else {
      this.setState({status: true});
    }
  };
  render() {
    const {
      viewTopIcon,
      viexTopText,
      textTopContainer,
      viewTopMainContainer,
      viewGoogleImage,
      viewSecondContainer,
      textContinueWith,
      viewLoginContainer,
      textLoginContainer,
      imageGoogleContainer,
      viewOrContainer,
      textOrContainer,
      textinputContainer,
      viewTextInput,
      textForgetpassword,
      viewLoginbtn,
      btnLogin,
      textLoginbtn,
      viewBottomContainer,
      viewSkipNowContainer,
      textBottomConatiner,
      textSkipNowContainer,
    } = styles;
    return (
      <SafeAreaView
        style={{flex: 1, backgroundColor: Constant.color.lightblue}}>
        <KeyboardAvoidingView behavior="padding" >
        <View style={viewTopMainContainer}>
          <View style={viewTopIcon}>
            <TouchableOpacity>
              <Feathericon
                name={'arrow-left'}
                color={Constant.color.white}
                size={wp('8%')}
              />
            </TouchableOpacity>
          </View>
          <View style={viexTopText}>
            <TouchableOpacity>
              <Text style={textTopContainer}>{'Help'}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={viewLoginContainer}>
          <Text style={textLoginContainer}>{'LOG IN'}</Text>
        </View>
        <View style={viewSecondContainer}>
          <View>
            <Text style={textContinueWith}>{'Continue with'}</Text>
          </View>

          <View style={{marginLeft: wp('5%')}}>
            <Image
              source={require('./images/google.png')}
              style={{width:wp('10%'),height:hp('7%')}}
              resizeMode={'contain'}
            />
          </View>
          <View style={ {marginLeft: wp('3%')}}>
            <Image
                source={require('./images/fb.png')}
                style={{width:wp('10%'),height:hp('7%')}}
                resizeMode={'contain'}
            />
          </View>
        </View>
        <View style={[viewOrContainer,{height:hp('7%')}]}>
          <Text style={textOrContainer}>{'OR'}</Text>
        </View>
        <View style={{height: hp('30%')}}>
          <View style={viewTextInput}>
            <TextInput
              style={[textinputContainer, {width: wp('85%')}]}
              placeholder={'email@gmail.com'}
              returnKeyType={'next'}
              keyboardType={'email-address'}
              onSubmitEditing={() => { this.firstTextInput.focus(); }}
              placeholderTextColor={Constant.color.white}
            />
          </View>
          <View style={viewTextInput}>
            <View
              style={[
                textinputContainer,
                {
                  flexDirection: 'row',
                  width: wp('85%'),
                },
              ]}>
              <TextInput
                  ref={(input) => { this.firstTextInput = input; }}
                  style={{width:wp('80%'),color:Constant.color.white}}
                  placeholder={'Password'}
                  maxLength={10}
                  returnKeyType={'done'}
                  secureTextEntry={this.state.status}
                  placeholderTextColor={Constant.color.white}
              />
              <View style={{justifyContent:'center'}}>
                <TouchableOpacity onPress={this.ShowHideTextComponentView}>
                  {this.state.status && (
                    <Feathericon
                      name={'eye'}
                      size={wp('4%')}
                      color={Constant.color.white}
                    />
                  )}
                  {!this.state.status && (
                    <Feathericon
                      name={'eye-off'}
                      size={wp('4%')}
                      color={Constant.color.white}
                    />
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={viewLoginbtn}>
            <TouchableOpacity
                activeOpacity={0.7}
              style={btnLogin}>
              <Text
                style={textLoginbtn}>
                {'LOG IN'}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[viewOrContainer,{height:hp('5%')}]}>
            <Text style={textForgetpassword}>
              {'Forget Your Password?'}
            </Text>
          </View>
        </View>
        <View style={{height: hp('22%'),alignItems:'center'}} >
          <TouchableOpacity activeOpacity={0.7}>
          <View style={viewSkipNowContainer}>
            <Text style={textSkipNowContainer}>
              {'Skip for now'}
            </Text>
          </View>
          </TouchableOpacity>
          <View style={viewBottomContainer}>
            <View style={{flexDirection:'row'}}>
              <Text style={textBottomConatiner}>
                {'By signing up or logging in, you agree to our'}
              </Text>
              <TouchableOpacity>
                <View>
                  <Text style={[textBottomConatiner,{fontWeight:'bold'}]}>
                    {'Terms of Services'}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row'}}>
              <Text style={textBottomConatiner}>
                {'and'}
              </Text>
              <TouchableOpacity>
                <View style={{marginLeft: hp('0.5%')}}>
                  <Text style={[textBottomConatiner,{fontWeight:'bold'}]}>
                    {'Privacy Policy'}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  textBottomConatiner:{
    color:Constant.color.white,
    fontSize:wp('3%')
  },
  textSkipNowContainer:{
    fontSize:wp('4%'),
    fontWeight:'bold',
    color:Constant.color.white,
    textAlign:'center'
  },
  viewSkipNowContainer:{
    height: hp('12%'),
    justifyContent: 'flex-end',
    width: wp('27%'),
    borderBottomWidth: 2,
    borderColor: Constant.color.white,
  },
  viewBottomContainer: {
    height: hp('8%'),
    width: wp('100%'),
    marginTop: wp('5%'),
    justifyContent: 'center',
    alignItems: 'center'
  },
  textLoginbtn:{
    fontSize: wp('4%'),
    textAlign: 'center',
    color: Constant.color.blue,
    fontWeight: '500',
  },
  btnLogin:{
    backgroundColor: 'white',
    height: hp('5%'),
    width: wp('85%'),
    justifyContent: 'center',
    borderRadius: 5,
  },
  viewLoginbtn:{
    height: hp('8%'),
    marginTop: wp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textForgetpassword: {
    fontSize: wp('4%'),
    color: Constant.color.white,
  },
  viewTextInput: {
    height: hp('7%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textinputContainer: {
    borderWidth: 1,
    height: hp('6%'),
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: Constant.color.white,
    fontSize: wp('4%'),
    color: Constant.color.white,
  },
  textOrContainer: {
    fontWeight: '500',
    fontSize: wp('5%'),
    color: Constant.color.white,
  },
  viewOrContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageGoogleContainer: {
    height: hp('4%'),
    width: wp('9%'),
  },
  textLoginContainer: {
    textAlign: 'center',
    fontSize: wp('7%'),
    fontWeight: 'bold',
    color: Constant.color.white,
  },
  viewLoginContainer: {
    height: hp('13%'),
    width: wp('100%'),
    justifyContent: 'flex-end',
  },
  viewTopIcon: {
    width: wp('20%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  viexTopText: {
    width: wp('20%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTopContainer: {
    color: Constant.color.white,
    fontSize: wp('5%'),
  },
  viewTopMainContainer: {

    height: hp('5%'),
    marginTop: hp('5%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewGoogleImage: {
    backgroundColor: 'white',
    borderRadius: wp('10%'),
    width: wp('12%'),
    height: hp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewSecondContainer: {
    height: hp('10%'),
    alignItems: 'center',
    flexDirection: 'row',
  },
  textContinueWith: {
    fontSize: wp('5%'),
    color: Constant.color.white,
    marginLeft: wp('20%'),
    fontWeight: '600',
  },
});
