<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Literature>
 */
class LiteratureFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

        public function definition(): array
    {
        $repeats = 10;
        do {
            $author_id = User::all()->random()->id;
            $user = User::where('id', $author_id)
                ->get();
            $repeats--;
        } while ($repeats >= 0 && count($user) > 0);

        return [
            'author_id' => $author_id,
            'title' => fake('hu_HU')->realText(15),
            'evaluation' => rand(0, 100) / 10,
            'description' => fake('hu_HU')->realText(200),
        ];
    }
    }

