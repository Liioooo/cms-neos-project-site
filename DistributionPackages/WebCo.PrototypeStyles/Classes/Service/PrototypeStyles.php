<?php

namespace WebCo\PrototypeStyles\Service;

use Neos\Flow\Annotations as Flow;
use Neos\Utility\Files;

/**
 * @Flow\Scope("singleton")
 */
class PrototypeStyles
{

    protected $styles = [];


    public function addStyleFile(string $filePath) {
        if (array_key_exists($filePath, $this->styles))
            return;

        $this->styles[$filePath] = Files::getFileContents($filePath);
    }

    public function getMergedStyles(): string {
        $styles = array_reduce($this->styles, function ($carry, $current) {
            return $carry .= ' ' . $current;
        });
        return '<style>' . $styles . '</style>';
    }
}
