<?php

namespace App\Http\Controllers;

use App\Models\Literature;
use Illuminate\Http\Request;

class LiteratureController extends Controller
{
    public function index()
    {
        return Literature::all();
    }

    public function show($id)
    {
        return Literature::find($id);
    }

    public function store(Request $request)
    {
        $lit = new Literature();
        $lit->title = $request->title;
        $lit->evaluation = $request->evaluation;
        $lit->description = $request->description;
        $lit->save();
    }

    public function update(Request $request, $id)
    {
        $lit = Literature::find($id);
        $lit->title = $request->title;
        $lit->evaluation = $request->evaluation;
        $lit->description = $request->description;
        $lit->save();
    }

    public function destroy($id)
    {
        Literature::find($id)->delete();
    }
}
