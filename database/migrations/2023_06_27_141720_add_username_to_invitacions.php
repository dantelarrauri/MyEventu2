<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('invitacions', function (Blueprint $table) {
            $table->string('username');
            $table->foreign('username')->references('username')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('invitacions', function (Blueprint $table) {
            $table->dropForeign(['username']);
            $table->dropColumn('username');
        });
    }
};
