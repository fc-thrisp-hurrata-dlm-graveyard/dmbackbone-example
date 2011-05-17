class DocumentsController < ApplicationController
  respond_to :json

  def index
    @documents = Document.all
    respond_with(@documents)
  end

  def show
    @document = Document.first(:id=>params[:id])
    respond_with(@document)
  end

  def create 
    document = Document.create! params

    if document.save
      respond_with document
    end
  end

  def update
    document = Document.first(:id=>params[:id])
    document.update! params
    if document.update
      respond_with document
    end
  end

end
