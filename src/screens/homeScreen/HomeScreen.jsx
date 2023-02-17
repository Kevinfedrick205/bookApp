import React, { useState } from 'react'
import { View, Text, StatusBar, SafeAreaView, Dimensions, ScrollView, Pressable, Image, StyleSheet } from 'react-native'
import Constants  from 'expo-constants'
import { Entypo, FontAwesome5, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import bookImg from '../../../assets/images/book.jpg'
import bookImg2 from '../../../assets/images/book2.jpg'
import bookImg3 from '../../../assets/images/book3.jpeg'
import bookImg4 from '../../../assets/images/bokk4.jpg'
import bookImg5 from '../../../assets/images/book5.jpeg'
import { shadow } from '../../constants/theme'

const StatusBarHeight = Constants.StatusBarHeight
const {width, height} = Dimensions.get('window')

const HomeScreen = () => {
    const [genreSelected, setGenreSelected] = useState("all-genre")
  return (
    <SafeAreaView>
        <StatusBar 
            animated={true}
            backgroundColor="#Eeeeee"
            barStyle="dark-content"
            showHideTransition="slide"
            hidden={false}    
        />
        <ScrollView
        horizontal={false}
        showsHorizontalScrollIndicator={false} 
        showsVerticalScrollIndicator={false}
        style={{
            marginTop: StatusBarHeight,
            width: width,
        }}>
            <View style={{
                    wdith: width-10,
                    height: 160,
                    marginLeft: 10,
                    marginRight: 10,
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginTop: 0,
                    backgroundColor: '#F7eee2',
                    borderRadius: 10,
                    ...shadow
                }}>
                <View style={{
                    width: '50%',
                    margin: 10
                }}>
                    <View style={{
                        width: 80,
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        backgroundColor: '#fff',
                        height: 20,
                        borderRadius: 10,
                        marginBottom: 5,
                        padding: 1
                    }}>
                        <FontAwesome5 name="hotjar" size={15} color="#C5922f" />
                        <Text style={{
                            color: '#C5922f',
                            fontSize: 12,
                        }}>Popular</Text>
                    </View>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                        fontFamily: 'sans-serif-medium'
                    }}>The Psychology of Money</Text>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '100',
                        marginTop: 10
                    }}>Morgan House (2020)</Text>
                    <Pressable>
                        <Text style={{
                            fontSize: 18,
                            color: '#C5922f'
                        }}>Read More</Text>
                    </Pressable>
                </View>
                <View style={{
                    marginTop: 10,
                    marginRight: 10,
                }}>
                    <Image 
                    source={bookImg2}
                    resizeMode="cover"
                    style={{
                        width: (width-100)/2,
                        height: 135,
                        borderRadius: 10
                    }}
                     />
                </View>
            </View>
            <View style={{
                width: width,
                height: 50,
                marginTop: 10,
                marginBottom: 10,
                marginLeft: 3,
            }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} style={{
                    width: width,
                }}>
                    <Pressable onPress={() => {setGenreSelected('all-genre')}} style={styles.genreContainer}>
                        <Text style={{
                            ...styles.genreText,
                            color: genreSelected === 'all-genre'? "#C5922f" : "#000",
                            fontWeight: genreSelected === 'all-genre'? "bold" : "400"
                            }}>All Genre</Text>
                    </Pressable>
                    <Pressable onPress={() => {setGenreSelected('comedy')}} style={styles.genreContainer}>
                        <Text style={{
                            ...styles.genreText,
                            color: genreSelected === 'comedy'? "#C5922f" : "#000",
                            fontWeight: genreSelected === 'comedy'? "bold" : "400"
                            }}>Comedy</Text>
                    </Pressable>
                    <Pressable onPress={() => {setGenreSelected('fiction')}} style={styles.genreContainer}>
                        <Text style={{
                            ...styles.genreText,
                            color: genreSelected === 'fiction'? "#C5922f" : "#000",
                            fontWeight: genreSelected === 'fiction'? "bold" : "400"
                            }}>Fiction</Text>
                    </Pressable>
                    <Pressable onPress={() => {setGenreSelected('romance')}} style={styles.genreContainer}>
                        <Text style={{
                            ...styles.genreText,
                            color: genreSelected === 'romance'? "#C5922f" : "#000",
                            fontWeight: genreSelected === 'romance'? "bold" : "400"
                            }}>Romance</Text>
                    </Pressable>
                    <Pressable onPress={() => {setGenreSelected('action')}} style={styles.genreContainer}>
                        <Text style={{
                            ...styles.genreText,
                            color: genreSelected === 'action'? "#C5922f" : "#000",
                            fontWeight: genreSelected === 'action'? "bold" : "400"
                            }}>Action</Text>
                    </Pressable>
                    <Pressable onPress={() => {setGenreSelected('bio')}} style={styles.genreContainer}>
                        <Text style={{
                            ...styles.genreText,
                            color: genreSelected === 'bio'? "#C5922f" : "#000",
                            fontWeight: genreSelected === 'bio'? "bold" : "400"
                            }}>Biography</Text>
                    </Pressable>
                </ScrollView>
            </View>
            <View style={{
                width: width,
                marginTop: 0,
                marginBottom: 10,
                marginLeft: 3,
            }}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                >
                    <View>
                        <View style={{
                            width: width/3,
                            height: 180,
                            marginHorizontal: 10
                        }}>
                           <Image source={bookImg2} 
                            resizeMode="contain"
                            style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: 10,
                                ...shadow
                            }}
                           />
                        </View>
                        <View style={{
                            
                        }}>
                            <View style={{
                                marginLeft: 15,
                                marginTop: 8,
                                width: width/3,
                            }}>
                                <Text style={{
                                    fontWeight: 'bold',
                                    fontSize: 16,
                                    fontFamily: 'sans-serif-medium'
                                }}>
                                    Pyschology...
                                </Text>
                                <Text style={{
                                    fontSize: 17,
                                    fontWeight: '200'
                                }}>
                                    Morgan Housel
                                </Text>
                            </View>
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                                width: width/3,
                                marginLeft: 10,
                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    backgroundColor: '#Fbf3d4',
                                    width: '40%',
                                    borderRadius: 10,
                                    
                                }}>
                                    <Entypo name="star" size={16} color="#Eabe13" style={{
                                        marginleft: 0
                                    }}/>
                                    <Text style={{
                                        color: '#Eabe13',
                                        fontSize: 12,
                                        fontWeight: 'bold',
                                     
                                    }}>4.4</Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent : 'space-around',
                                    backgroundColor: '#8fe9f9',
                                    width: '50%',
                                    borderRadius: 5,
                                    
                                }}>
                                    <MaterialIcons name="my-library-books" size={16} color="#0aa1bb" />
                                    <Text style={{
                                        color: '#0aa1bb',
                                        fontSize: 11,
                                        fontWeight: 'bold',
                                      
                                    }}>Picked</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View style={{
                            width: width/3,
                            height: 180,
                            marginHorizontal: 10
                        }}>
                           <Image source={bookImg3} 
                            resizeMode="contain"
                            style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: 10,
                                ...shadow
                            }}
                           />
                        </View>
                        <View style={{
                            
                        }}>
                            <View style={{
                                marginLeft: 15,
                                marginTop: 8,
                                width: width/3,
                            }}>
                                <Text style={{
                                    fontWeight: 'bold',
                                    fontSize: 16,
                                    fontFamily: 'sans-serif-medium'
                                }}>
                                    Crack The Code
                                </Text>
                                <Text style={{
                                    fontSize: 17,
                                    fontWeight: '200'
                                }}>
                                    Kelvin F Kerimu
                                </Text>
                            </View>
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                width: width/3,
                                marginLeft: 10,
                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    backgroundColor: '#Fbf3d4',
                                    width: '40%',
                                    borderRadius: 10,
                                    
                                }}>
                                    <Entypo name="star" size={16} color="#Eabe13" style={{
                                        marginleft: 0
                                    }}/>
                                    <Text style={{
                                        color: '#Eabe13',
                                        fontSize: 12,
                                        fontWeight: 'bold',
                                     
                                    }}>4.9</Text>
                                </View>
                                {/* <View style={{
                                    flexDirection: 'row',
                                    justifyContent : 'space-around',
                                    backgroundColor: '#8fe9f9',
                                    width: '50%',
                                    borderRadius: 5,
                                    
                                }}>
                                    <MaterialIcons name="my-library-books" size={16} color="#0aa1bb" />
                                    <Text style={{
                                        color: '#0aa1bb',
                                        fontSize: 11,
                                        fontWeight: 'bold',
                                      
                                    }}>Picked</Text>
                                </View> */}
                            </View>
                        </View>
                    </View>
                    <View>
                        <View style={{
                            width: width/3,
                            height: 180,
                            marginHorizontal: 10
                        }}>
                           <Image source={bookImg4} 
                            resizeMode="contain"
                            style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: 10,
                                ...shadow
                            }}
                           />
                        </View>
                        <View style={{
                            
                        }}>
                            <View style={{
                                marginLeft: 15,
                                marginTop: 8,
                                width: width/3,
                            }}>
                                <Text style={{
                                    fontWeight: 'bold',
                                    fontSize: 16,
                                    fontFamily: 'sans-serif-medium'
                                }}>
                                    Love In The ...
                                </Text>
                                <Text style={{
                                    fontSize: 17,
                                    fontWeight: '200'
                                }}>
                                    Susan Lee
                                </Text>
                            </View>
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                                width: width/3,
                                marginLeft: 10,
                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    backgroundColor: '#Fbf3d4',
                                    width: '40%',
                                    borderRadius: 10,
                                    
                                }}>
                                    <Entypo name="star" size={16} color="#Eabe13" style={{
                                        marginleft: 0
                                    }}/>
                                    <Text style={{
                                        color: '#Eabe13',
                                        fontSize: 12,
                                        fontWeight: 'bold',
                                     
                                    }}>4.1</Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent : 'space-around',
                                    backgroundColor: '#8fe9f9',
                                    width: '50%',
                                    borderRadius: 5,
                                    
                                }}>
                                    <MaterialIcons name="my-library-books" size={16} color="#0aa1bb" />
                                    <Text style={{
                                        color: '#0aa1bb',
                                        fontSize: 11,
                                        fontWeight: 'bold',
                                      
                                    }}>Picked</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View style={{
                            width: width/3,
                            height: 180,
                            marginHorizontal: 10
                        }}>
                           <Image source={bookImg5} 
                            resizeMode="contain"
                            style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: 10,
                                ...shadow
                            }}
                           />
                        </View>
                        <View style={{
                            
                        }}>
                            <View style={{
                                marginLeft: 15,
                                marginTop: 8,
                                width: width/3,
                            }}>
                                <Text style={{
                                    fontWeight: 'bold',
                                    fontSize: 16,
                                    fontFamily: 'sans-serif-medium'
                                }}>
                                    Red Dragon
                                </Text>
                                <Text style={{
                                    fontSize: 17,
                                    fontWeight: '200'
                                }}>
                                    Kelvin F Kerimu
                                </Text>
                            </View>
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                                width: width/3,
                                marginLeft: 10,
                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    backgroundColor: '#Fbf3d4',
                                    width: '40%',
                                    borderRadius: 10,
                                    
                                }}>
                                    <Entypo name="star" size={16} color="#Eabe13" style={{
                                        marginleft: 0
                                    }}/>
                                    <Text style={{
                                        color: '#Eabe13',
                                        fontSize: 12,
                                        fontWeight: 'bold',
                                     
                                    }}>4.3</Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent : 'space-around',
                                    backgroundColor: '#8fe9f9',
                                    width: '50%',
                                    borderRadius: 5,
                                    
                                }}>
                                    <MaterialIcons name="my-library-books" size={16} color="#0aa1bb" />
                                    <Text style={{
                                        color: '#0aa1bb',
                                        fontSize: 11,
                                        fontWeight: 'bold',
                                      
                                    }}>Picked</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View style={{
                            width: width/3,
                            height: 180,
                            marginHorizontal: 10
                        }}>
                           <Image source={bookImg2} 
                            resizeMode="contain"
                            style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: 10,
                                ...shadow
                            }}
                           />
                        </View>
                        <View style={{
                            
                        }}>
                            <View style={{
                                marginLeft: 15,
                                marginTop: 8,
                                width: width/3,
                            }}>
                                <Text style={{
                                    fontWeight: 'bold',
                                    fontSize: 16,
                                    fontFamily: 'sans-serif-medium'
                                }}>
                                    Pyschology...
                                </Text>
                                <Text style={{
                                    fontSize: 17,
                                    fontWeight: '200'
                                }}>
                                    Morgan Housel
                                </Text>
                            </View>
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                                width: width/3,
                                marginLeft: 10,
                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    backgroundColor: '#Fbf3d4',
                                    width: '40%',
                                    borderRadius: 10,
                                    
                                }}>
                                    <Entypo name="star" size={16} color="#Eabe13" style={{
                                        marginleft: 0
                                    }}/>
                                    <Text style={{
                                        color: '#Eabe13',
                                        fontSize: 12,
                                        fontWeight: 'bold',
                                     
                                    }}>4.4</Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent : 'space-around',
                                    backgroundColor: '#8fe9f9',
                                    width: '50%',
                                    borderRadius: 5,
                                    
                                }}>
                                    <MaterialIcons name="my-library-books" size={16} color="#0aa1bb" />
                                    <Text style={{
                                        color: '#0aa1bb',
                                        fontSize: 11,
                                        fontWeight: 'bold',
                                      
                                    }}>Picked</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    
                </ScrollView>
            </View>
            <View style={{
                width: width,
                marginLeft: 20,
                marginTop: 10,
            }}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: '700',
                    fontFamily: 'sans-serif',
                }}>Continue Reading</Text>
            </View>
            <View style={{
                width: width,
                marginTop: 20
            }}>
                <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                style={{
                    width: width,
                }}>
                    <View style={{
                        width: width/1.2,
                        heigth: 135,
                        marginLeft: 10,
                        ...shadow,
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        backgroundColor: '#F5f3f2',
                        borderRadius: 10
                    }}>
                        <View style={{
                            marginLeft: 0,
                            width: '40%'
                        }}>
                            <Image source={bookImg3} 
                                resizeMode="contain"
                                style={{
                                    width: "100%",
                                    height: 120,
                                    borderRadius: 10
                                }}
                            />
                        </View>
                        <View>
                            <View style={{
                                width: '50%',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}>
                                <View style={{
                                     flexDirection: 'row',
                                     justifyContent: 'space-between',
                                     backgroundColor: '#F7edc3',
                                     width: 60,
                                     height: 30,
                                     borderRadius: 5,
                                     alignItems: 'center',
                                     padding: 5
                                }}>
                                <Ionicons name="star" size={20} color="#Eac52b" />
                                <Text style={{
                                    color: '#Eac52b',
                                    fontSize: 18,
                                    fontWeight: 'bold',
                                    marginTop: -2
                                }}>4.4</Text>
                                </View>
                                <View style={{
                                     flexDirection: 'row',
                                     justifyContent: 'space-between',
                                     marginLeft: 10,
                                }}>
                                    <View style={{
                                        backgroundColor: '#B8d1ee',
                                        width: 30,
                                        height: 30,
                                        borderRadius: 10,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <MaterialIcons name="library-books" size={20} color="#2279de" />
                                    </View>
                                    <View style={{
                                        backgroundColor: '#F3deac',
                                        width: 30,
                                        height: 30,
                                        borderRadius: 10,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginLeft: 10
                                    }}>
                                        <MaterialCommunityIcons name="crown-circle" size={20} color="#Eab024" />
                                    </View>
                                </View>
                            </View>
                            <View style={{
                                marginTop: 10,
                                marginLeft: 2,
                            }}>
                                <Text style={{
                                    fontSize: 18,
                                    fontWeight: '800',
                                    fontFamily: 'sans-serif-medium'
                                }}>Crack The Code</Text>
                                <Text style={{
                                    fontSize: 18,
                                    fontWeight: '300',
                                    fontFamily: 'sans-serif-light',
                                    marginTop: 4,
                                }}>Kelvin F Kerimu</Text>
                                <View style={{
                                    marginTop: 20,
                                    width: '100%',
                                    marginLeft: 0,
                                    height: 5,
                                    backgroundColor: '#C9c9c9',
                                    borderRadius: 4
                                }}>
                                    <View style={{
                                        marginTop: 0,
                                        width: '60%',
                                        marginLeft: 0,
                                        height: 5,
                                        backgroundColor: '#9c7108',
                                        borderRadius: 4
                                    }}/>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        width: width/1.5,
                        heigth: 130,
                        marginLeft: 10,
                        ...shadow,
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        marginRight: 20
                    }}>
                        <View style={{
                            marginLeft: 0,
                            width: '40%'
                        }}>
                            <Image source={bookImg4} 
                                resizeMode="contain"
                                style={{
                                    width: "100%",
                                    height: 120,
                                    borderRadius: 10
                                }}
                            />
                        </View>
                        <View>
                            <View style={{
                                width: '50%',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}>
                                <View style={{
                                     flexDirection: 'row',
                                     justifyContent: 'space-between',
                                     backgroundColor: '#F7edc3',
                                     width: 60,
                                     height: 30,
                                     borderRadius: 5,
                                     alignItems: 'center',
                                     padding: 5
                                }}>
                                <Ionicons name="star" size={20} color="#Eac52b" />
                                <Text style={{
                                    color: '#Eac52b',
                                    fontSize: 18,
                                    fontWeight: 'bold',
                                    marginTop: -2
                                }}>4.4</Text>
                                </View>
                                <View style={{
                                     flexDirection: 'row',
                                     justifyContent: 'space-between',
                                     marginLeft: 10,
                                }}>
                                    <View style={{
                                        backgroundColor: '#B8d1ee',
                                        width: 30,
                                        height: 30,
                                        borderRadius: 10,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <MaterialIcons name="library-books" size={20} color="#2279de" />
                                    </View>
                                    <View style={{
                                        backgroundColor: '#F3deac',
                                        width: 30,
                                        height: 30,
                                        borderRadius: 10,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginLeft: 10
                                    }}>
                                        <MaterialCommunityIcons name="crown-circle" size={20} color="#Eab024" />
                                    </View>
                                </View>
                            </View>
                            <View style={{
                                marginTop: 10,
                                marginLeft: 2,
                            }}>
                                <Text style={{
                                    fontSize: 18,
                                    fontWeight: '800',
                                    fontFamily: 'sans-serif-medium'
                                }}>Crack The Code</Text>
                                <Text style={{
                                    fontSize: 18,
                                    fontWeight: '300',
                                    fontFamily: 'sans-serif-light',
                                    marginTop: 4,
                                }}>Kelvin F Kerimu</Text>
                                <View style={{
                                    marginTop: 20,
                                    width: '100%',
                                    marginLeft: 2,
                                    height: 5,
                                    backgroundColor: '#C9c9c9',
                                    borderRadius: 4
                                }}>
                                    <View style={{
                                        marginTop: 0,
                                        width: '90%',
                                        marginLeft: 0,
                                        height: 5,
                                        backgroundColor: '#9c7108',
                                        borderRadius: 4
                                    }}/>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View style={{
                width: width,
                marginLeft: 20,
                marginTop: 10,
            }}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: '700',
                    fontFamily: 'sans-serif',
                }}>Favourite Reading</Text>
            </View>
            <View style={{
                width: width,
                marginTop: 20,
                marginBottom: 150,
            }}>
                <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                style={{
                    width: width,
                }}>
                    <View style={{
                        width: width/1.2,
                        heigth: 135,
                        marginLeft: 10,
                        ...shadow,
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        backgroundColor: '#F5f3f2',
                        borderRadius: 10
                    }}>
                        <View style={{
                            marginLeft: 0,
                            width: '40%'
                        }}>
                            <Image source={bookImg2} 
                                resizeMode="contain"
                                style={{
                                    width: "100%",
                                    height: 120,
                                    borderRadius: 10
                                }}
                            />
                        </View>
                        <View>
                            <View style={{
                                width: '50%',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}>
                                <View style={{
                                     flexDirection: 'row',
                                     justifyContent: 'space-between',
                                     backgroundColor: '#F7edc3',
                                     width: 60,
                                     height: 30,
                                     borderRadius: 5,
                                     alignItems: 'center',
                                     padding: 5
                                }}>
                                <Ionicons name="star" size={20} color="#Eac52b" />
                                <Text style={{
                                    color: '#Eac52b',
                                    fontSize: 18,
                                    fontWeight: 'bold',
                                    marginTop: -2
                                }}>4.4</Text>
                                </View>
                                <View style={{
                                     flexDirection: 'row',
                                     justifyContent: 'space-between',
                                     marginLeft: 10,
                                }}>
                                    <View style={{
                                        backgroundColor: '#B8d1ee',
                                        width: 30,
                                        height: 30,
                                        borderRadius: 10,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <MaterialIcons name="library-books" size={20} color="#2279de" />
                                    </View>
                                    <View style={{
                                        backgroundColor: '#F3deac',
                                        width: 30,
                                        height: 30,
                                        borderRadius: 10,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginLeft: 10
                                    }}>
                                        <MaterialCommunityIcons name="crown-circle" size={20} color="#Eab024" />
                                    </View>
                                </View>
                            </View>
                            <View style={{
                                marginTop: 10,
                                marginLeft: 2,
                            }}>
                                <Text style={{
                                    fontSize: 18,
                                    fontWeight: '800',
                                    fontFamily: 'sans-serif-medium'
                                }}>Crack The Code</Text>
                                <Text style={{
                                    fontSize: 18,
                                    fontWeight: '300',
                                    fontFamily: 'sans-serif-light',
                                    marginTop: 4,
                                }}>Kelvin F Kerimu</Text>
                                <View style={{
                                    marginTop: 20,
                                    width: '100%',
                                    marginLeft: 0,
                                    height: 5,
                                    backgroundColor: '#C9c9c9',
                                    borderRadius: 4
                                }}>
                                    <View style={{
                                        marginTop: 0,
                                        width: '40%',
                                        marginLeft: 0,
                                        height: 5,
                                        backgroundColor: '#9c7108',
                                        borderRadius: 4
                                    }}/>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        width: width/1.5,
                        heigth: 130,
                        marginLeft: 10,
                        ...shadow,
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        marginRight: 20
                    }}>
                        <View style={{
                            marginLeft: 0,
                            width: '40%'
                        }}>
                            <Image source={bookImg5} 
                                resizeMode="contain"
                                style={{
                                    width: "100%",
                                    height: 120,
                                    borderRadius: 10
                                }}
                            />
                        </View>
                        <View>
                            <View style={{
                                width: '50%',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}>
                                <View style={{
                                     flexDirection: 'row',
                                     justifyContent: 'space-between',
                                     backgroundColor: '#F7edc3',
                                     width: 60,
                                     height: 30,
                                     borderRadius: 5,
                                     alignItems: 'center',
                                     padding: 5
                                }}>
                                <Ionicons name="star" size={20} color="#Eac52b" />
                                <Text style={{
                                    color: '#Eac52b',
                                    fontSize: 18,
                                    fontWeight: 'bold',
                                    marginTop: -2
                                }}>4.4</Text>
                                </View>
                                <View style={{
                                     flexDirection: 'row',
                                     justifyContent: 'space-between',
                                     marginLeft: 10,
                                }}>
                                    <View style={{
                                        backgroundColor: '#B8d1ee',
                                        width: 30,
                                        height: 30,
                                        borderRadius: 10,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <MaterialIcons name="library-books" size={20} color="#2279de" />
                                    </View>
                                    <View style={{
                                        backgroundColor: '#F3deac',
                                        width: 30,
                                        height: 30,
                                        borderRadius: 10,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginLeft: 10
                                    }}>
                                        <MaterialCommunityIcons name="crown-circle" size={20} color="#Eab024" />
                                    </View>
                                </View>
                            </View>
                            <View style={{
                                marginTop: 10,
                                marginLeft: 2,
                            }}>
                                <Text style={{
                                    fontSize: 18,
                                    fontWeight: '800',
                                    fontFamily: 'sans-serif-medium'
                                }}>Crack The Code</Text>
                                <Text style={{
                                    fontSize: 18,
                                    fontWeight: '300',
                                    fontFamily: 'sans-serif-light',
                                    marginTop: 4,
                                }}>Kelvin F Kerimu</Text>
                                <View style={{
                                    marginTop: 20,
                                    width: '100%',
                                    marginLeft: 2,
                                    height: 5,
                                    backgroundColor: '#C9c9c9',
                                    borderRadius: 4
                                }}>
                                    <View style={{
                                        marginTop: 0,
                                        width: '8%',
                                        marginLeft: 0,
                                        height: 5,
                                        backgroundColor: '#9c7108',
                                        borderRadius: 4
                                    }}/>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    genreContainer : {
        marginHorizontal: 0,
        padding: 14,
    },

    genreText: {
        fontSize: 18,
        fontFamily: 'sans-serif',
    }
})

export default HomeScreen
