<?php


namespace Lio\PrototypeStyles\FusionObjects;

use Neos\Flow\Annotations as Flow;
use Neos\Fusion\FusionObjects\AbstractFusionObject;
use Lio\PrototypeStyles\Service\PrototypeStyles;

class StyleCollectorImplementation extends AbstractFusionObject
{

    /**
     * @Flow\Inject
     * @var PrototypeStyles
     */
    protected $prototypeStyles;

    public function evaluate()
    {
        return $this->prototypeStyles->getMergedStyles();
    }
}
