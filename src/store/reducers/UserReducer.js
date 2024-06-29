const initialstate = {
  totalUsers: 5,
  users: [{
    'id':'1',
    'name':'Hinal',
    'lastname': 'Patel',
    'email': 'hinal@gmail.com',
    'phone': '2323232323',
    'gender': 'female'
  },{
    'id':'2',
    'name':'Nick',
    'lastname': 'Thakkar',
    'email': 'nick45@gmail.com',
    'phone': '9328174323',
    'gender': 'male'
  },{
    'id':'3',
    'name':'Sejal',
    'lastname': 'Soni',
    'email': 'sejal@gmail.com',
    'phone': '2323232323',
    'gender': 'female'
  },{
    'id':'4',
    'name':'Riya',
    'lastname': 'Patel',
    'email': 'riya@gmail.com',
    'phone': '2323232323',
    'gender': 'female'
  },{
    'id':'5',
    'name':'Diya',
    'lastname': 'Patel',
    'email': 'diya@gmail.com',
    'phone': '9485275413',
    'gender': 'female'
  }]
};

const UserReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        users: [action.payload, ...state.users]
      };
    default:
      return state;
  }
};

export default UserReducer;
