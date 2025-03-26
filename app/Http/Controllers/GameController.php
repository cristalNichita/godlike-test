<?php

namespace App\Http\Controllers;

use App\Classes\ApiResponse;
use App\Http\Requests\GameRequest;
use App\Services\GameService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class GameController extends Controller
{
    public function __construct(protected GameService $service) {}

    public function index(): JsonResponse
    {
        return ApiResponse::success($this->service->getAllGames(), 'Games fetched successfully.');
    }

    public function store(GameRequest $request): JsonResponse
    {
        $data = $request->validated();

        return ApiResponse::success(
            $this->service->createGame($data),
            'Game created successfully.',
            201
        );
    }

    public function show(int $id): JsonResponse
    {
        return ApiResponse::success($this->service->getGameById($id), 'Game fetched successfully.');
    }

    public function update(GameRequest $request, int $id): JsonResponse
    {
        $data = $request->validated();

        return ApiResponse::success(
            $this->service->updateGame($id, $data),
            'Game updated successfully.'
        );
    }

    public function destroy(int $id)
    {
        $this->service->deleteGame($id);
        return ApiResponse::success(null, 'Game deleted successfully.');
    }
}
