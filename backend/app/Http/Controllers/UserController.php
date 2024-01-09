<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        return User::all();
    }

    public function show($id)
    {
        return User::find($id);
    }

    public function store(Request $request)
    {
        $user = new User();
        $user->name = $request->name;
        $user->save();
        return User::all();
    }

    public function update(Request $request, $id)
    {
        $user = User::find($id);
        $user->name = $request->name;
        $user->save();
        return User::all();

    }

    public function destroy($id)
    {
        User::find($id)->delete();
        return User::all();
    }
}
