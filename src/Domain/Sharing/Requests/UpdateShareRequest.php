<?php
namespace Domain\Sharing\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateShareRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'protected'  => 'required|boolean',
            'password'   => 'required_if:protected,true|string',
            'permission' => 'sometimes|string',
            'expiration' => 'sometimes|integer',
        ];
    }
}
