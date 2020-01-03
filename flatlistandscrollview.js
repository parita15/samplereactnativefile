import React,{Component} from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    SafeAreaView,
    FlatList,
    Modal,
    Image,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
} from 'react-native';
import Feathericon from 'react-native-vector-icons/Feather';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Constant from './helper/themeHelper';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from './helper/responsiveScreen';

const DATANEW=[
    {
        id: 1,
        image:require('./images/dog.jpeg'),
        title: 'Dog',
        rs:'$ 1.00',
        name:'by Joel Vanz',
        text:'Very Good'
    },
    {
        id: 2,
        image: require('./images/dog1.jpeg'),
        title: 'Dog1',
        rs:'$ 1.50',
        name:'by Joel',
        text:'Good'
    },
    {
        id: 3,
        image: require('./images/dog2.jpeg'),
        title: 'Dog2',
        rs:'$ 2.00',
        name:'by Joen Thomas',
        text:'Very Bad'
    },
    {
        id: 4,
        image: require('./images/dog3.jpeg'),
        title: 'Dog3',
        rs:'$ 5.00',
        name:'by Jhon',
        text:'Very Good'
    },
    {
        id: 5,
        image: require('./images/dog4.jpeg'),
        title: 'Dog4',
        rs:'$ 1.55',
        name:'by Joel Vanz',
        text:'Bad'
    },
    {
        id: 6,
        image: require('./images/dog5.jpeg'),
        title: 'Dog5',
        rs:'$ 1.00',
        name:'by Jhon Vanz',
        text:'Very Good'
    },
    {
        id: 7,
        image: require('./images/download.jpeg'),
        title: 'Download',
        rs:'$ 3.50',
        name:'by Joel Vanz',
        text:'Very Bad'
    },

];
const DATA=[
    {
        id: 1,
        image:require('./images/video.png'),
        title:"Dromes "
    },
    {
        id: 2,
        image:require('./images/video.png'),
        title:"Lighting"
    },
    {
        id: 3,
        image:require('./images/video.png'),
        title:"Photography"
    },
    {
        id: 4,
        image:require('./images/video.png'),
        title:"Pro video"
    },
    {
        id: 5,
        image:require('./images/video.png'),
        title:"Simple Video"
    },
    {
        id: 6,
        image:require('./images/video.png'),
        title:"Dromes"
    },
    {
        id: 7,
        image:require('./images/video.png'),
        title:"Lighting"
    },
    {
        id: 8,
        image:require('./images/video.png'),
        title:"Photography"
    },

];
export default class FlatlistandscrollbarBasic extends Component{
    constructor(props){
        super(props)
        this.state = {
            modalVisible:false,
            weeklystatus: true,
            feedstatus: true,
            explorestatus: true,
            newsstatus: true,
            myProfilestatus: true,
        }
    }
    FeedstatusComponent = () => {
        if (this.state.feedstatus) {
            this.setState({feedstatus: false});
        } else {
            this.setState({feedstatus: true});
        }
    };
    ExplorestatusComponent = () => {
        if (this.state.explorestatus) {
            this.setState({explorestatus: false});
        } else {
            this.setState({explorestatus: true});
        }
    };
    NewsstatusComponent = () => {
        if (this.state.newsstatus) {
            this.setState({newsstatus: false});
        } else {
            this.setState({newsstatus: true});
        }
    };
    MyprofilestatusComponent = () => {
        if (this.state.myProfilestatus) {
            this.setState({myProfilestatus: false});
        } else {
            this.setState({myProfilestatus: true});
        }
    };
    showWeekly = () => {
        if(this.state.weeklyStatus !== "Weekly"){
            this.setState({
                weeklyStatus: 'Weekly'
            });
        }else{
            this.setState({
                weeklyStatus: 'Monthly'
            });
        }

    }
    onClose = () => {
        this.setState({modalVisible : false})
    }
    setModalVisible(visible){
        this.setState({modalVisible : visible})
    }
    renderHeaderItem = ({item}) =>{
        debugger
        return (
            <View style={{justifyContent:'center',alignItems:'center',
                width: wp('25%'),marginTop: hp('4%')
                }}>
                <TouchableOpacity style={{justifyContent:'center',alignItems:'center',}}>
                <View style={styles.viewTopFlatlist} key={item.id}>
                        <Image style={styles.storyContainer} source={item.image} />
                </View>
                <View style={{marginTop:hp('2%'), justifyContent:'center', alignItems: 'center',
                    width:wp('35%')}}>
                    <Text style={{marginLeft:wp('2%'), textAlign: 'center'}}>
                        {item.title}
                    </Text>
                </View>
                </TouchableOpacity>
            </View>
        );
    };
    renderMainItem = ({item}) =>{
        const{viewMainFlatlist,
            viewFlatlistImage,imageNewListing,
            viewAbsoluteConatiner,touchableMainflatlist,
            viewAbsoluteHeartConatiner,viewNameFlatlist,textNameFlatlist,viewTextFlatlist,
            subViewFlatlistCOntainer,subViewContainer,imageMainFlatlist,textTextFlatlist,
            viewTitleFlatlist,textTitleFlatlist,viewRsFlatlist} = styles;
        return (
            <View style={touchableMainflatlist}>
                <TouchableOpacity style={viewMainFlatlist}>
                    <View style={viewFlatlistImage}>
                        <Image style={imageMainFlatlist}
                               source={item.image}/>
                    </View>
                    <View style={viewAbsoluteConatiner}>
                        <View style={{height:hp('2.5%'),
                            width:wp('30%')}}>
                            <Image source={require('./images/newListingTag.png')}
                                   style={imageNewListing}/>
                        </View>
                        <TouchableOpacity style={viewAbsoluteHeartConatiner}>
                            <EvilIcon name={'heart'} size={wp('6.5%')} color={'white'}/>
                        </TouchableOpacity>
                    </View>
                    <View style={subViewFlatlistCOntainer}>
                        <View style={[subViewContainer,{height:hp('3.5%')}]}>
                            <View style={viewTitleFlatlist}>
                                <Text style={textTitleFlatlist}>
                                    {item.title}
                                </Text>
                            </View>
                            <View style={viewRsFlatlist}>
                                <Text style={{fontSize:wp('4%'),textAlign:'center'}}>
                                    {item.rs}
                                </Text>
                            </View>
                        </View>
                        <View style={[subViewContainer,{height:hp('4%')}]}>
                            <View style={viewNameFlatlist}>
                                <Text style={textNameFlatlist}>
                                    {item.name}
                                </Text>
                            </View>
                            <View style={viewTextFlatlist}>
                                <Text style={textTextFlatlist}>
                                    {item.text}
                                </Text>
                            </View>
                        </View>
                    </View>

                </TouchableOpacity>
            </View>
        );
    };
    render(){
        const{viewTopMainContainer,
            viewTopIcon,
            viexTopText,
            textTopContainer,textBottomContainer,textBottomStateContainer,
            viewContainer,textSubModalContainer,
            textLatestlisting,textModalContainer,viewModalWeeklyMonthly,
            viewLatestlisting,viewWeeklyContainer,viewSubModal,viewCloseBtn,viewModalImage,
            searchContainer,viewLoginbtn,btnLogin,textLoginbtn,viewModalText,
            viewAbsoluteTopContainer}=styles;
        return(
            <SafeAreaView style={{flex:1,backgroundColor: 'rgba(255,255,255,1)'}}>
                <View style={viewTopMainContainer}>
                    <View style={viexTopText}>
                        <TouchableOpacity>
                            <Text style={textTopContainer}>{'Feed'}</Text>
                        </TouchableOpacity>
                    </View>
                        <View style={{alignItems:'center',justifyContent:'center'}}>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={this.state.modalVisible}>
                                <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.3)',alignItems:'center',
                                        justifyContent:'center'}}>
                                <View style={{marginTop:hp('5%')}}>
                                        <View>
                                            <View style={viewSubModal}>
                                                <TouchableOpacity onPress={this.onClose}>
                                                    <View style={viewCloseBtn}>
                                                        <AntDesignIcon name={'close'}
                                                                       size={wp('9%')}/>
                                                    </View>
                                                </TouchableOpacity>
                                                <View style={viewModalImage}>
                                                    <Image source={require('./images/verifyIdentity.png')}
                                                           style={{width:wp('30%'),
                                                               height:hp('14%')}}/>
                                                </View>
                                                <View style={viewModalText}>
                                                    <Text style={textModalContainer}>
                                                        {'Want to do something a little more often?'}
                                                    </Text>
                                                </View>
                                                <View style={viewModalText}>
                                                    <Text style={textSubModalContainer}>
                                                        {'Take advantage of time with a regular investment'}
                                                    </Text>
                                                </View>
                                                <View style={{height:hp('17%'),
                                                    alignItems:'center'}}>
                                                    <View style={viewModalWeeklyMonthly}>
                                                        <TouchableOpacity style={{borderRadius:20}} onPress={this.showWeekly}>
                                                            <View
                                                                style={[viewWeeklyContainer, this.state.weeklyStatus === 'Weekly' ? {backgroundColor: Constant.color.darkYellow} :{backgroundColor: 'rgba(0,0,0,0)' }]}>
                                                                <Text style={{textAlign: 'center',
                                                                    fontSize:wp('5%')}}>
                                                                    {'Weekly'}
                                                                </Text>
                                                            </View>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity onPress={this.showWeekly}>
                                                            <View
                                                                style={[viewWeeklyContainer, this.state.weeklyStatus === 'Monthly' ? {backgroundColor: Constant.color.darkYellow} :{backgroundColor: 'rgba(0,0,0,0)'} ]}>
                                                                <Text style={{textAlign: 'center',
                                                                    fontSize:wp('5%')}}>
                                                                    {'Monthly'}
                                                                </Text>
                                                            </View>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                                <View
                                                    style={viewLoginbtn}>
                                                    <TouchableOpacity
                                                        style={btnLogin}>
                                                        <Text
                                                            style={textLoginbtn}>
                                                            {'Set Auto-Invest'}
                                                        </Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={{justifyContent:'center',alignItems:'center'}}>
                                                    <Text style={{textAlign:'center',fontSize:wp('4%')}}>
                                                        {'Invest $22 Just Once'}
                                                    </Text>
                                                </View>
                                            </View>

                                        </View>
                                    </View>
                                </View>
                            </Modal>
                            <View style={viewTopIcon}>
                                <TouchableOpacity onPress={()=>{this.setModalVisible(true)}}>
                                    <Feathericon
                                        name={'shopping-cart'}
                                        color={Constant.color.lightblue}
                                        size={wp('8%')}
                                    />
                                    <View style={viewAbsoluteTopContainer}>
                                        <Text style={{fontWeight:'800',fontSize:wp('3%'),textAlign: 'center',
                                            color:Constant.color.white}}>{3}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                </View>
                <ScrollView style={{height:hp('100%'),backgroundColor:'white'}}
                            indicatorStyle={'white'}   >
                    <View style={viewContainer}>
                        <View style={{flexDirection: 'row',
                            width:wp('90%'),borderRadius:5,backgroundColor:Constant.color.skyblue}}>
                            <View style={{width:wp('10%')}}>
                                <TouchableOpacity>
                                    <EvilIcon name="search" size={25} style={{padding: 10}}/>
                                </TouchableOpacity>
                            </View>

                            <View style={{justifyContent:'center'}}>
                                <TextInput style={searchContainer}
                                           placeholder={'Search'}
                                           clearButtonMode={'while-editing'}/>
                            </View>
                        </View>
                    </View>
                        <FlatList
                            style={{height:hp('17%')}}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            data={DATA}
                            renderItem={({item})=> this.renderHeaderItem({item})}
                            keyExtractor={item => item.id}
                            ItemSeparatorComponent={ () =>
                                ( <View style={{width: wp('2%')}}/>
                                )}
                        />
                    <View style={viewTopMainContainer}>
                        <View style={viewLatestlisting}>
                            <TouchableOpacity>
                                <Text style={textLatestlisting}>{'Latest Listing'}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={viewTopIcon}>
                            <TouchableOpacity>
                                <Feathericon
                                    name={'shopping-cart'}
                                    color={Constant.color.lightblue}
                                    size={wp('8%')}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <FlatList
                        style={{backgroundColor: Constant.color.white}}
                        data={DATANEW}
                        renderItem={({item})=> this.renderMainItem({item})}
                        keyExtractor={item => item.id}
                    />
                </ScrollView>
                <View style={{height:hp('8%'),flexDirection:'row'}}>
                    <TouchableOpacity style={{height:hp('8%'),
                        width:wp('19%')}} onPress={this.FeedstatusComponent}>
                        {this.state.feedstatus && (
                                <View>
                                    <View style={{height:hp('5%'),justifyContent:'center',
                                        alignItems:'center'}}>
                                        <EvilIcon name={'chart'} size={wp('10%')} color={Constant.color.lightGray}/>
                                    </View>
                                    <View style={{justifyContent:'center',alignItems:'center'}}>
                                        <Text style={textBottomContainer}>
                                            {'Feed'}
                                        </Text>
                                    </View>
                                </View>
                        )}
                        {!this.state.feedstatus && (
                            <View>
                                <View style={{height:hp('5%'),justifyContent:'center',
                                    alignItems:'center'}}>
                                    <EvilIcon name={'chart'} size={wp('10%')} color={Constant.color.lightblue}/>
                                </View>
                                <View style={{justifyContent:'center',alignItems:'center'}}>
                                    <Text style={textBottomStateContainer}>
                                        {'Feed'}
                                    </Text>
                                </View>
                            </View>
                        )}
                    </TouchableOpacity>
                    <TouchableOpacity style={{height:hp('8%'),width:wp('19%')}}
                            onPress={this.ExplorestatusComponent}>
                        {this.state.explorestatus && (
                            <View>
                                <View style={{height:hp('5%'),justifyContent:'center',
                                    alignItems:'center'}}>
                                    <EvilIcon name={'search'} size={wp('10%')} color={Constant.color.lightGray}/>
                                </View>
                                <View style={{justifyContent:'center',alignItems:'center'}}>
                                    <Text style={textBottomContainer}>
                                        {'Explore'}
                                    </Text>
                                </View>
                            </View>
                        )}
                        {!this.state.explorestatus && (
                            <View>
                                <View style={{height:hp('5%'),justifyContent:'center',
                                    alignItems:'center'}}>
                                    <EvilIcon name={'search'} size={wp('10%')} color={Constant.color.lightblue}/>
                                </View>
                                <View style={{justifyContent:'center',alignItems:'center'}}>
                                    <Text style={textBottomStateContainer}>
                                        {'Explore'}
                                    </Text>
                                </View>
                            </View>
                        )}
                    </TouchableOpacity>
                    <TouchableOpacity style={{height:hp('8%'),width:wp('24%'),
                            justifyContent:'center',alignItems:'center'}}>
                        <View style={{height:hp('7%'),width:hp('7%'),borderWidth:2,
                            borderColor:Constant.color.lightblue,justifyContent:'center',alignItems:'center',
                                    borderRadius:75,backgroundColor:Constant.color.white}}>
                            <AntDesignIcon name={'pluscircle'} size={wp('12%')}
                                           color={Constant.color.lightblue}
                                            style={{marginTop:hp('0.5%')}}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{height:hp('8%'),width:wp('19%')}}
                            onPress={this.NewsstatusComponent}>
                        {this.state.newsstatus && (
                            <View>
                                <View style={{height:hp('5%'),justifyContent:'center',
                                    alignItems:'center'}}>
                                    <EvilIcon name={'bell'} size={wp('10%')} color={Constant.color.lightGray}/>
                                </View>
                                <View style={{justifyContent:'center',alignItems:'center'}}>
                                    <Text style={textBottomContainer}>
                                        {'News'}
                                    </Text>
                                </View>
                            </View>
                        )}
                        {!this.state.newsstatus && (
                            <View>
                                <View style={{height:hp('5%'),justifyContent:'center',
                                    alignItems:'center'}}>
                                    <EvilIcon name={'bell'} size={wp('10%')} color={Constant.color.lightblue}/>
                                </View>
                                <View style={{justifyContent:'center',alignItems:'center'}}>
                                    <Text style={textBottomStateContainer}>
                                        {'News'}
                                    </Text>
                                </View>
                            </View>
                        )}
                    </TouchableOpacity>
                    <TouchableOpacity style={{height:hp('8%'),width:wp('19%')}}
                            onPress={this.MyprofilestatusComponent}>
                        {this.state.myProfilestatus && (
                            <View>
                                <View style={{height:hp('5%'),justifyContent:'center',
                                    alignItems:'center'}}>
                                    <Feathericon name={'user'} size={wp('10%')} color={Constant.color.lightGray}/>
                                </View>
                                <View style={{justifyContent:'center',alignItems:'center'}}>
                                    <Text style={textBottomContainer}>
                                        {'My Profile'}
                                    </Text>
                                </View>
                            </View>
                        )}
                        {!this.state.myProfilestatus && (
                            <View>
                                <View style={{height:hp('5%'),justifyContent:'center',
                                    alignItems:'center'}}>
                                    <Feathericon name={'user'} size={wp('10%')} color={Constant.color.lightblue}/>
                                </View>
                                <View style={{justifyContent:'center',alignItems:'center'}}>
                                    <Text style={textBottomStateContainer}>
                                        {'My Profile'}
                                    </Text>
                                </View>
                            </View>
                        )}
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    textBottomContainer:{
        color:Constant.color.lightGray,
        fontWeight:'500'
    },
    textBottomStateContainer:{
        color:Constant.color.lightblue,
        fontWeight:'500'
    },
    viewModalWeeklyMonthly:{
        backgroundColor:'rgba(0,0,0,0.3)',
        height:hp('15%'),
        marginTop:hp('1%'),
        width:wp('30%'),
        alignItems:'center',
        borderRadius:10
    },
    textSubModalContainer:{
        textAlign: 'center',
        fontSize:wp('5%')
    },
    textModalContainer:{
        fontSize:wp('6%'),
        textAlign: 'center',
        fontWeight:'bold'
    },
    viewModalText:{
        height:hp('9%'),
        justifyContent:'center',
        alignItems:'center'
    },
    viewModalImage:{
        height:hp('25%'),
        width:wp('80%'),
        justifyContent:'center',
        alignItems:'center'
    },
    viewCloseBtn:{
        height:hp('7%'),
        borderTopLeftRadius:20,
        borderTopRightRadius: 20,
        justifyContent:'center',
        alignItems:'flex-end'
    },
    viewSubModal:{
        backgroundColor:'white',
        height:hp('80%'),
        width:wp('80%'),
        borderRadius:20,
    },
    viewWeeklyContainer:{
        height:hp('6%'),
        width:wp('27%'),
        borderRadius:10,
        justifyContent:'center',
        marginTop:hp('0.5%')
    },

    textLoginbtn:{
        fontSize: wp('4%'),
        textAlign: 'center',
        color: Constant.color.black,
        fontWeight: '500',
    },
    btnLogin:{
        backgroundColor: Constant.color.darkYellow,
        height: hp('5%'),
        width: wp('60%'),
        justifyContent: 'center',
        borderRadius: 5,
    },
    viewLoginbtn:{
        height: hp('8%'),
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageNewListing:{
        height:hp('2.5%'),
        width:wp('35%'),
        borderTopLeftRadius:10
    },
    touchableMainflatlist:{
        justifyContent:'center',
        height:hp('35%'),
        alignItems:'center',
        width: wp('100%'),
        backgroundColor: 'white',
    },
    textTextFlatlist:{
        fontSize:wp('4%'),
        textAlign:'center',color:Constant.color.lightGreen
    },
    viewTextFlatlist:{
        width:wp('30%'),
        alignItems:'center',
        justifyContent:'center',
        height:hp('3.5%'),
        marginLeft:wp('15%')
    },
    textNameFlatlist:{
        color:Constant.color.lightGray,
        fontSize:wp('4%'),
        marginLeft:wp('3%')
    },
    viewNameFlatlist:{
        width:wp('40%'),
        justifyContent:'center',
        height:hp('3.5%')
    },
    viewRsFlatlist:{
        width:wp('20%'),
        alignItems:'center',
        justifyContent:'center',
        height:hp('3.5%'),
        marginLeft:wp('33%')
    },
    textTitleFlatlist:{
        fontWeight:'bold',
        fontSize:wp('4%'),
        marginLeft:wp('3%')
    },
    viewTitleFlatlist:{
        width:wp('30%'),
        justifyContent:'center',
        height:hp('3.5%')
    },
    subViewContainer:{
        width:wp('85%'),
        flexDirection:'row'
    },
    subViewFlatlistCOntainer:{
        height:hp('7.5%'),
        width:wp('85%'),
        backgroundColor:'white',
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10
    },
    viewAbsoluteHeartConatiner:{
        height:hp('4%'),
        width:hp('4%'),
        backgroundColor:'rgba(0,0,0,0.3)',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:75,
        marginLeft:wp('44%'),
        marginTop:hp('1%'),
    },
    viewAbsoluteConatiner: {
        position: 'absolute',
        width: wp('85%'),
        height: hp('4%'),
        flexDirection:'row'
    },
    viewAbsoluteTopContainer: {
        position: 'absolute',
        width: wp('3.5%'),
        height: wp('3.5%'),
        backgroundColor:'red',
        borderRadius:100,
        marginLeft:wp('5%')
    },
    imageMainFlatlist:{
        width:wp('85%'),
        height:hp('25%'),
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    viewFlatlistImage:{
        width:wp('85%'),
        height:hp('22%')
    },
    viewMainFlatlist:{
        height:hp('30%'),
        width:wp('85%'),
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.2,
        shadowRadius:20,
        elevation: 30,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor:'white',
        borderRadius:10,
    },
    viewTopFlatlist:{
        marginLeft:wp('1%'),
        alignItems:'center',
        width:hp('7%'),
        height:hp('7%'),
        borderRadius:7,
        justifyContent:'center',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 7},
        shadowOpacity:0.2,
        elevation:15,
        backgroundColor:'white',
        shadowRadius: 25.00
    },
    storyContainer:{
        width:wp('8%'),
        height:hp('4%'),
    },
    searchContainer:{
        fontSize: 15,
        marginLeft:wp('2%'),
        height: 40,
        width:wp("70%"),
    },
    viewContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        height:hp('6%'),
        marginTop: hp('4%')
    },
    viewTopIcon: {
        width: wp('15%'),
        justifyContent: 'center',
        alignItems: 'center',
    },
    viexTopText: {
        width: wp('20%'),
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:wp('3%')
    },
    textTopContainer: {
        fontSize: wp('7%'),
        marginLeft:wp('3%'),
        fontWeight:'bold'
    },
    viewLatestlisting: {
        width: wp('50%'),
        justifyContent: 'center',
        alignItems: 'center',

    },
    textLatestlisting: {
        fontSize: wp('5%'),
        marginLeft:wp('1%'),
        fontWeight: '500'
    },
    viewTopMainContainer: {
        width:wp('95%'),
        height: hp('6%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:hp('3%')
    },
})

