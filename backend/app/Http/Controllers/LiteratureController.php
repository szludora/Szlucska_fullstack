<?php

namespace App\Http\Controllers;

use App\Models\Literature;
use Illuminate\Http\Request;

use function PHPSTORM_META\type;

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
        $lit->author = $request->author;
        $lit->title = $request->title;
        if ($request->evaluation !== NULL) {
            $lit->evaluation = $request->evaluation;
        }
        if ($request->description !== NULL) {
            $lit->description = $request->description;
        }
        $lit->save();
        return Literature::all();
    }

    public function update(Request $request, $id)
    {
        $lit = Literature::find($id);
        $lit->author = $request->author;
        $lit->title = $request->title;
        if ($request->evaluation !== NULL) {
            $lit->evaluation = $request->evaluation;
        }
        if ($request->description !== NULL) {
            $lit->description = $request->description;
        }
        $lit->save();
        return Literature::all();

    }

    public function destroy($id)
    {
        Literature::find($id)->delete();
        return Literature::all();
    }

    public function descriptor()
    {
        return [
            'id' => [
                'id' => 'id',
                'type' => 'id',
                'class' => 'form-control',
                'label' => 'id',
            ],
            'author' => [
                'id' => 'author',
                'label' => 'Szerző',
                'type' => 'text',
                'placeholder' => 'Szerző',
                'class' => 'form-control'
            ],
            'title' => [
                'id' => 'title',
                'label' => 'Cím',
                'type' => 'text',
                'placeholder' => 'Cím',
                'class' => 'form-control',
            ],
            'evaluation' => [
                'id' => 'evaluation',
                'label' => 'Értékelés',
                'type' => 'number',
                'value' => "0.0",
                'min' => "0.0",
                'max' => "10.0",
                'step' => "0.1",
                'class' => 'form-control',
            ],
            'description' => [
                'id' => 'description',
                'label' => 'Leírás',
                'type' => 'textarea',
                'rows' => '3',
                'placeholder' => 'Leírás',
                'class' => 'w-100'
            ],
        ];
    }
}
