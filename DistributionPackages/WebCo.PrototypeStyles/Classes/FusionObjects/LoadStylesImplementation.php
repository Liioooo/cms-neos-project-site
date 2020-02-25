<?php

namespace WebCo\PrototypeStyles\FusionObjects;

use Neos\Flow\Annotations as Flow;
use Neos\FluidAdaptor\Core\ViewHelper\Exception\InvalidVariableException;
use Neos\Fusion\FusionObjects\AbstractFusionObject;
use Neos\Utility\Files;
use WebCo\PrototypeStyles\Service\PrototypeStyles;

class LoadStylesImplementation extends AbstractFusionObject
{

    /**
     * @Flow\Inject
     * @var PrototypeStyles
     */
    protected $prototypeStyles;

    protected function getContent(): ?string
    {
        return $this->fusionValue('content');
    }

    protected function getFilePath(): ?string
    {
        return $this->fusionValue('file');
    }

    public function evaluate()
    {
        $filePath = $this->getFilePath();

        if ($filePath == null) {
            throw new InvalidVariableException('File has to be provided');
        }

        $this->prototypeStyles->addStyleFile($filePath);

        return $this->getContent();
    }

}
