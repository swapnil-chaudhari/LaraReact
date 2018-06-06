<?php
namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Models\Categories;
use App\Http\Controllers\Controller;

class CategoriesController extends Controller
{
    public function index(Request $request)
    {
        $results = Categories::all('id', 'categoryTitle', 'categoryDescription')->toArray();

        if (!$results){

            return response()->json([
                'code' => 400,
                'error'  =>  'No Categories found.'
            ], 400);
          }

        return response()->json([
              'results'  => $results
            ]);

    }

    public function store(Request $request)
    {
        $imageName = time().'.'.$request->categoryIcon->getClientOriginalExtension();

        $categories = new Categories;

        $categories->categoryTitle = $request->categoryTitle;

        $categories->categoryDescription = $request->categoryDescription;

        $categories->categoryIcon = $imageName;

        $categories->save();

        $request->categoryIcon->move(public_path('icons'), $imageName);

        return response()->json([
            'results' => 'Category is added successfully.'
        ]);
    }

    public function update(Request $request, $id)
    {
        try {
            $imageName = time().'.'.$request->categoryIcon->getClientOriginalExtension();

            Categories::find($id)->update(
                [
                    'categoryTitle' => $request->categoryTitle,
                    'categoryDescription' => $request->categoryDescription,
                    'categoryIcon' => $imageName
                ]
            );

            $request->categoryIcon->move(
                public_path('icons'),
                $imageName
            );

            return response()->json([
              'results'  =>  'Category is updated successfully.'
          ]);
        } catch(Exception $e) {
            return response()->json([
                'results'  =>  'Update operation has failed.'
            ]);
        }
    }

    public function destroy($id)
    {
        try {
          Categories::find($id)->delete();
          return response()->json([
              'results'  =>  'Category is deleted successfully.'
          ]);
        } catch(Exception $e) {
            return response()->json([
                'results'  =>  'Delete operation has failed.'
            ]);
        }
    }

}