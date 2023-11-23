<?php

namespace Database\Factories;

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
        return [
            'title' => fake('hu_HU')->realText(15),
            'evaluation' => rand(0, 100)/ 10,
            'description' => fake('hu_HU')->realText(50),
        ];
    }
}
