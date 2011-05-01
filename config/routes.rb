Dmbackbone::Application.routes.draw do
  
  root :to => "home#index"  
  resources :documents

end
