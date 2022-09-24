// Filename: public/backendTest.js

// Code written in public files is shared by your site's
// Backend, page code, and site code environments.
import wixUsersBackend from 'wix-users-backend';

export function support03_beforeInsert(item, context) {

	item.userReference = wixUsersBackend.currentUser.id;
	return item;

}
// Use public files to hold utility functions that can
// be called from multiple locations in your site's code.
export function add(param1, param2) {
	return param1 + param2;
}

// The following code demonstrates how to call the add
// function from your site's page code or site code.
/*
import {add} from 'public/backendTest.js'
$w.onReady(function () {
    let sum = add(6,7);
    console.log(sum);
});
*/

//The following code demonstrates how to call the add
//function in one of your site's backend files.
/*
import {add} from 'public/backendTest.js'
export function usingFunctionFromPublic(a, b) {
	return add(a,b);
}
*/