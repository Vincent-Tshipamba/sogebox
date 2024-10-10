<?php

namespace App\View\Components;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class DeleteModal extends Component
{
    public $formId;
    public $item;

    public function __construct($formId, $item)
    {
        $this->formId = $formId;
        $this->item = $item;
    }

    public function render(): View|Closure|string
    {
        return view('components.delete-modal');
    }
}
