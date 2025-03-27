<?php

namespace App\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Attribute\Route;
final class HomeController extends AbstractController
{
    #[Route("/", "app_home")]
    public function index()
    {
        return $this->render('home/index.html.twig', [
        ]);
    }
}